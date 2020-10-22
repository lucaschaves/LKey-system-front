import { GET_COURSES, POST_COURSE, CourseActionTypes } from "./types";
import { Course } from "./interfaces";

export const getCoursesAction = (courses: Course[]): CourseActionTypes => {
  return {
    type: GET_COURSES,
    payload: courses,
  };
};

export const postCourseAction = (course: Course): CourseActionTypes => {
  return {
    type: POST_COURSE,
    payload: course,
  };
};
