import jwt from "jsonwebtoken";
import tokenConfig from "../../config/tokenConfig";

export const generateToken = (payload: {}): string => jwt.sign(payload, tokenConfig.secret, {
  algorithm: 'HS256',
  expiresIn: tokenConfig.expires
});

export const generateRefreshToken = (payload: {}): string => jwt.sign(payload, tokenConfig.refresh_secret, {
  algorithm: 'HS256',
  expiresIn: tokenConfig.refresh_expires
});

export const validateToken = (token: string) => jwt.verify(token, tokenConfig.secret);

export const validateRefreshToken = (token: string) => <jwt.UserIdJwtPayload>(jwt.verify(token, tokenConfig.refresh_secret));
