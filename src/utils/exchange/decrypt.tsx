const _sodium = require('libsodium-wrappers');
import { getKeyPair } from './keypair';

export const decrypted = async (value: string, ctx?: any) => {
  if (!value || value === '') return value;

  await _sodium.ready;
  const sodium = _sodium;

  try {
    const { keypair } = await getKeyPair(ctx);

    const sharedRx: any = Object.values(keypair.sharedRx);
    const keyRx = new Uint8Array(sharedRx);

    const encryptedDataWithoutNonce = value.substring(48);
    const nonce = sodium.from_hex(value.substring(0, 48));

    const decrypted = sodium.crypto_secretbox_open_easy(sodium.from_hex(encryptedDataWithoutNonce), nonce, keyRx);

    return sodium.to_string(decrypted);
  } catch (e) {
    console.log('fn getDectypted', e);
  }
};
