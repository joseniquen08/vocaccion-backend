import CryptoJS from 'crypto-js';

export const encryptPassword = async (password: string): Promise<string> => {
  return CryptoJS.AES.encrypt(password, `${process.env.ENCRYPT_SECRET}`).toString();
}

const decryptHash = (hash: string): string => {
  return CryptoJS.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`).toString(CryptoJS.enc.Utf8);
}

export const comparePassword = (password: string, encryptedPassword: string): boolean => password === decryptHash(encryptedPassword);