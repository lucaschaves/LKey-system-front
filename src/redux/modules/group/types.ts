import { Group } from "./interfaces";

export const GET_GROUPS = "GET_GROUPS";
export const POST_GROUP = "POST_GROUP";

export interface GetGroupsStateType {
  list: Group[];
  new: Group | null
}

interface GetGroupsActionType {
  type: typeof GET_GROUPS;
  payload: Group[];
}

interface PostGroupActionType {
  type: typeof POST_GROUP;
  payload: Group;
}

export type GroupActionTypes = GetGroupsActionType | PostGroupActionType;
