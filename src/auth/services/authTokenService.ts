import { UserIdType } from "../../collections/user/entity/types/user";
import { TokenModel } from "../entity/models/authTokenModel";
import { generateRefreshToken, generateToken } from "../utils/tokenManager";

export const authGenerateTokenService = (user_id: string | UserIdType): { authToken: string, refreshToken: string } => {
  try {
    return {
      authToken: generateToken({ id: user_id }),
      refreshToken: generateRefreshToken({ id: user_id })
    }
  } catch (error: any) {
    throw new Error(`Error creating tokens: ${error.message}`);
  }
}

export const authGenerateRefreshTokenService = async (user_id: string | UserIdType): Promise<string> => {
  try {
    const refreshToken = generateRefreshToken({ id: user_id });
    const token = new TokenModel({
      owner: user_id,
      token: refreshToken
    });
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    throw new Error(`Error creating a new resource ${error.message}`);
  }
}
