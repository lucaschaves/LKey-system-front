import { getCoursesAction, postCourseAction } from "./actions";
import { Dispatch } from "redux";
import { CourseActionTypes } from "./types";
import { Course } from "./interfaces";
import api from "../../../services/api";

export const getCourses = () => {
  return async function (dispatch: Dispatch<CourseActionTypes>) {
    const resp = await api.get("course");
    const data: Course[] = resp.data;
    const disp = await dispatch(getCoursesAction(data));
    return disp;
  };
};

export const postCourse = (payload: Course) => {
  return async function (dispatch: Dispatch<CourseActionTypes>) {
    const resp = await api.post("course", payload);
    const data: Course = resp.data;
    const disp = await dispatch(postCourseAction(data));
    return disp;
  };
};