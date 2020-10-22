import {
  GET_SESSIONS,
  GetSessionsStateType,
  SessionActionTypes,
  POST_SESSION,
} from "./types";

const initialState: GetSessionsStateType = {
  list: [],
  new: null,
};

export const getSessionsReducer = (
  state = initialState,
  action: SessionActionTypes
): GetSessionsStateType => {
  switch (action.type) {
    case GET_SESSIONS:
      return {
        ...state,
        list: action.payload,
      };
    case POST_SESSION:
      return {
        ...state,
        new: action.payload,
      };
    default:
      return state;
  }
};
