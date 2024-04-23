import { exchange } from '@/apis/data/data.services';
import { postExchangeHandler } from '@/libs/msig/data.handler';
import { getCookie, setCookie } from 'cookies-next';
import featureFlags from '../featureFlags';

const _sodium = require('libsodium-wrappers');

let keypairId: any;
let keypair: any;
let keypairExpirationDate: any;

export const getKeyPair = async (ctx?: any) => {
  // remove later when this feature is enabled
  if (!featureFlags.isEncrypt) {
    return {};
  }

  // get value from cookie
  keypairExpirationDate = new Date(getCookie('keypairExpirationDate', ctx) as any);
  keypairId = getCookie('keypairId', ctx) as any;
  keypair = getCookie('keypair', ctx) && JSON.parse(getCookie('keypair', ctx) as any);

  const currentDate = new Date();
  if (keypair && keypairExpirationDate && currentDate < keypairExpirationDate) {
    return {
      keypairId,
      keypair,
    };
  } else {
    await _sodium.ready;
    const sodium = _sodium;
    let newKeypair = sodium.crypto_kx_keypair();
    let pk = sodium.to_hex(newKeypair.publicKey);
    let sk = sodium.to_hex(newKeypair.privateKey);

    const bytes = pk.toString('utf-8');

    const encoded = Buffer.from(bytes).toString('base64');

    const result = ctx
      ? await postExchangeHandler({
          ...ctx,
          body: {
            data: encoded,
          },
        })
      : await exchange({ data: encoded });

    const responseData = result.data![0];
    const id = responseData.data1;
    const serverPublicKey = Buffer.from(Buffer.from(responseData.data2, 'base64').toString(), 'utf-8').toString();
    const expiresIn = responseData.expires_in;

    if (keypair && keypairExpirationDate && currentDate < keypairExpirationDate) {
      return {
        keypairId,
        keypair,
      };
    }

    keypairId = id;
    keypair = sodium.crypto_kx_client_session_keys(
      sodium.from_hex(pk),
      sodium.from_hex(sk),
      sodium.from_hex(serverPublicKey)
    );

    console.log('pk', pk);
    console.log('sk', sk);
    console.log('serverPublicKey', serverPublicKey);

    keypairExpirationDate = new Date();
    keypairExpirationDate.setSeconds(keypairExpirationDate.getSeconds() + (Number(expiresIn) - 20000));

    // save value to cookie
    setCookie('keypairId', keypairId, {
      ...ctx,
      expires: keypairExpirationDate,
    });
    setCookie('keypair', JSON.stringify(keypair), {
      ...ctx,
      expires: keypairExpirationDate,
    });
    setCookie('keypairExpirationDate', keypairExpirationDate, {
      ...ctx,
      expires: keypairExpirationDate,
    });

    return {
      keypairId,
      keypair,
    };
  }
};
