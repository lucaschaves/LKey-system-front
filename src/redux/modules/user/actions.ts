import { GET_USERS, POST_USER, UserActionTypes } from "./types";
import { User } from "./interfaces";

export const getUsersAction = (users: User[]): UserActionTypes => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const postUserAction = (user: User): UserActionTypes => {
  return {
    type: POST_USER,
    payload: user,
  };
};
