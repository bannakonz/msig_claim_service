const _sodium = require('libsodium-wrappers');
import { getKeyPair } from './keypair';

export const encrypted = async (value: string) => {
  if (!value || value === '') return value;

  await _sodium.ready;
  const sodium = _sodium;
  try {
    const { keypair } = await getKeyPair();
    const sharedTx: any = Object.values(keypair.sharedTx);
    const keyTx = new Uint8Array(sharedTx);

    const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
    const encryptData = sodium.crypto_secretbox_easy(value, nonce, keyTx);

    return sodium.to_hex(nonce) + sodium.to_hex(encryptData);
  } catch (e) {
    console.log('fn getEncrypted', e);
  }
};
