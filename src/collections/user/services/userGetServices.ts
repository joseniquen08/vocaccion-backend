import { IUser } from "../entity/interfaces/userInterfaces";
import { UserModel } from "../entity/models/userModels";

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const getUser: IUser | null = await UserModel.findOne({ email });
    return getUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
}