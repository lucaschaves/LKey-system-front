import { getGroupsAction, postGroupAction } from "./actions";
import { Dispatch } from "redux";
import { GroupActionTypes } from "./types";
import { Group } from "./interfaces";
import api from "../../../services/api";

export const getGroups = () => {
  return async function (dispatch: Dispatch<GroupActionTypes>) {
    const resp = await api.get("group");
    const data: Group[] = resp.data;
    const disp = await dispatch(getGroupsAction(data));
    return disp;
  };
};

export const postGroup = (payload: Group) => {
  return async function (dispatch: Dispatch<GroupActionTypes>) {
    const resp = await api.post("group", payload);
    const data: Group = resp.data;
    const disp = await dispatch(postGroupAction(data));
    return disp;
  };
};
