import { getSessionsAction, postSessionAction } from "./actions";
import { Dispatch } from "redux";
import { SessionActionTypes } from "./types";
import { Session } from "./interfaces";
import api from "../../../services/api";

export const getSessions = () => {
  return async function (dispatch: Dispatch<SessionActionTypes>) {
    const resp = await api.get("session");
    const data: Session[] = resp.data;
    const disp = await dispatch(getSessionsAction(data));
    return disp;
  };
};

export const postSession = (payload: Session) => {
  return async function (dispatch: Dispatch<SessionActionTypes>) {
    const resp = await api.post("session", payload);
    const data: Session = resp.data;
    const disp = await dispatch(postSessionAction(data));
    return disp;
  };
};