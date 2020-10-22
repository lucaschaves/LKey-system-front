import { Course } from "./interfaces";

export const GET_COURSES = "GET_COURSES";
export const POST_COURSE = "POST_COURSE";

export interface GetCoursesStateType {
  list: Course[];
  new: Course | null
}

interface GetCoursesActionType {
  type: typeof GET_COURSES;
  payload: Course[];
}

interface PostCourseActionType {
  type: typeof POST_COURSE;
  payload: Course;
}

export type CourseActionTypes = GetCoursesActionType | PostCourseActionType;
