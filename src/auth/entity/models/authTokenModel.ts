import { model } from 'mongoose';
import { IToken } from '../interfaces/authInterfaces';
import { AuthTokenSchema } from '../schemas/authTokenSchema';

export const TokenModel = model<IToken>('Token', AuthTokenSchema);