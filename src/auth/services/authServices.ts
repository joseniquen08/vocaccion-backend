import { IUser } from '../../collections/user/entity/interfaces/userInterfaces';
import { UserModel } from '../../collections/user/entity/models/userModels';
import { getUserByEmail } from '../../collections/user/services/userServices';
import { createResource } from '../../shared/factory/createResource';
import { signIn, signUp } from '../entity/types/auth';
import { comparePassword, encryptPassword } from '../utils/passwordManager';
import { generateToken } from '../utils/tokenManager';

export const signUpService = async (userReq: signUp): Promise<IUser> => {
  try {
    userReq.password = await encryptPassword(userReq.password);
    const newUser = await createResource(UserModel)(userReq);
    return newUser as IUser;
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}

export const signInService = async (userReq: signIn): Promise<string> => {
  try {
    const getUser = await getUserByEmail(userReq.email);
    if (getUser) {
      const auth = comparePassword(userReq.password, getUser.password);
      if (auth) {
        return generateToken({ id: getUser._id });
      } else {
        throw new Error("user email or password is incorrect");
      }
    } else {
      throw new Error("user email doesn't exits");
    }
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
}
