import { GET_GROUPS, POST_GROUP, GroupActionTypes } from "./types";
import { Group } from "./interfaces";

export const getGroupsAction = (groups: Group[]): GroupActionTypes => {
  return {
    type: GET_GROUPS,
    payload: groups,
  };
};

export const postGroupAction = (group: Group): GroupActionTypes => {
  return {
    type: POST_GROUP,
    payload: group,
  };
};
