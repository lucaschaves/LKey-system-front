import { GET_COURSES, GetCoursesStateType, CourseActionTypes, POST_COURSE } from "./types";

const initialState: GetCoursesStateType = {
  list: [],
  new: null
};

export const getCoursesReducer = (
  state = initialState,
  action: CourseActionTypes
): GetCoursesStateType => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        list: action.payload,
      };
    case POST_COURSE:
      return {
        ...state,
        new: action.payload
      }
    default:
      return state;
  }
};
