import {
  GET_GROUPS,
  GetGroupsStateType,
  GroupActionTypes,
  POST_GROUP,
} from "./types";

const initialState: GetGroupsStateType = {
  list: [],
  new: null,
};

export const getGroupsReducer = (
  state = initialState,
  action: GroupActionTypes
): GetGroupsStateType => {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        list: action.payload,
      };
    case POST_GROUP:
      return {
        ...state,
        new: action.payload,
      };
    default:
      return state;
  }
};
