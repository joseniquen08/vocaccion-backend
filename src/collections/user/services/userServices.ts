import { comparePassword, encryptPassword } from "../../../auth/utils/passwordManager";
import { generateToken } from "../../../auth/utils/tokenManager";
import { ApplicationError } from "../../../shared/errors/ApplicationError";
import { createResource } from "../../../shared/factory/createResource";
import { IUser } from "../entity/interfaces/userInterfaces";
import { UserModel } from "../entity/models/userModels";
import { signInUser, signUpUser } from "../entity/types/user";
import { getUserByEmail } from "./userGetServices";

export const signUpUserService = async (userReq: signUpUser): Promise<IUser> => {
  try {
    userReq.password = await encryptPassword(userReq.password);
    const newUser = await createResource(UserModel)(userReq);
    return newUser as IUser;
  } catch (error: any) {
    throw new ApplicationError(error.status, error.message, error.code === 11000 ? 'Db error' : '');
  }
}

export const signInUserService = async (userReq: signInUser): Promise<string> => {
  try {
    const getUser = await getUserByEmail(userReq.email);
    if (getUser) {
      const auth = comparePassword(userReq.password, getUser.password);
      if (auth) {
        return generateToken({ id: getUser._id });
      } else {
        throw new ApplicationError(401, 'user email or password is incorrect');
      }
    } else {
      throw new ApplicationError(401, "user email doesn't exits");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
