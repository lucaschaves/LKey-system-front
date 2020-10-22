import { getUsersAction, postUserAction } from "./actions";
import { Dispatch } from "redux";
import { UserActionTypes } from "./types";
import { User } from "./interfaces";
import api from "../../../services/api";

export const getUsers = () => {
  return async function (dispatch: Dispatch<UserActionTypes>) {
    const resp = await api.get("user");
    const data: User[] = resp.data;
    const disp = await dispatch(getUsersAction(data));
    return disp;
  };
};

export const postUser = (payload: User) => {
  return async function (dispatch: Dispatch<UserActionTypes>) {
    const resp = await api.post("user", payload);
    const data: User = resp.data;
    const disp = await dispatch(postUserAction(data));
    return disp;
  };
};