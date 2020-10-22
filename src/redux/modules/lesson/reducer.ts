import { GET_LESSONS, GetLessonsStateType, LessonActionTypes, POST_LESSON } from "./types";

const initialState: GetLessonsStateType = {
  list: [],
  new: null
};

export const getLessonsReducer = (
  state = initialState,
  action: LessonActionTypes
): GetLessonsStateType => {
  switch (action.type) {
    case GET_LESSONS:
      return {
        ...state,
        list: action.payload,
      };
    case POST_LESSON:
      return {
        ...state,
        new: action.payload
      }
    default:
      return state;
  }
};
