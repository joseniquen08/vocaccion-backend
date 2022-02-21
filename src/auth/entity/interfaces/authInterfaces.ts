import { UserIdType } from "../../../collections/user/entity/types/user";

export interface IToken {
  token: string;
  create_at: Date;
  expire_at: Date;
  owner: UserIdType;
}