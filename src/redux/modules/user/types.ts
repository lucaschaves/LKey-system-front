import { User } from "./interfaces";

export const GET_USERS = "GET_USERS";
export const POST_USER = "POST_USER";

export interface GetUsersStateType {
  list: User[];
  new: User | null
}

interface GetUsersActionType {
  type: typeof GET_USERS;
  payload: User[];
}

interface PostUserActionType {
  type: typeof POST_USER;
  payload: User;
}

export type UserActionTypes = GetUsersActionType | PostUserActionType;
