import { getLessonsAction, postLessonAction } from "./actions";
import { Dispatch } from "redux";
import { LessonActionTypes } from "./types";
import { Lesson } from "./interfaces";
import api from "../../../services/api";

export const getLessons = () => {
  return async function (dispatch: Dispatch<LessonActionTypes>) {
    const resp = await api.get("lesson");
    const data: Lesson[] = resp.data;
    const disp = await dispatch(getLessonsAction(data));
    return disp;
  };
};

export const postLesson = (payload: Lesson) => {
  return async function (dispatch: Dispatch<LessonActionTypes>) {
    const resp = await api.post("lesson", payload);
    const data: Lesson = resp.data;
    const disp = await dispatch(postLessonAction(data));
    return disp;
  };
};