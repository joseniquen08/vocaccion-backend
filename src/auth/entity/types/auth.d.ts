export type GenerateToken = {
  user_id: string;
}

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
}
