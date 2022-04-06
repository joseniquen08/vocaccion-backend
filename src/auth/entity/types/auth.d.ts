import { IUser } from '../../../collections/user/entity/interfaces/userInterfaces';

export type GenerateToken = {
  user_id: string;
}

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
}

export type signUp = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;

export type signIn = Omit<IUser, '_id' | 'username' | 'first_name' | 'last_name' | 'age' | 'role' | 'created_at' | 'updated_at'>;
