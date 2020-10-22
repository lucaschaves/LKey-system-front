import {
  GET_USERS,
  GetUsersStateType,
  UserActionTypes,
  POST_USER,
} from "./types";

const initialState: GetUsersStateType = {
  list: [],
  new: null,
};

export const getUsersReducer = (
  state = initialState,
  action: UserActionTypes
): GetUsersStateType => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        list: action.payload,
      };
    case POST_USER:
      return {
        ...state,
        new: action.payload,
      };
    default:
      return state;
  }
};
