import { GET_LESSONS, POST_LESSON, LessonActionTypes } from "./types";
import { Lesson } from "./interfaces";

export const getLessonsAction = (lessons: Lesson[]): LessonActionTypes => {
  return {
    type: GET_LESSONS,
    payload: lessons,
  };
};

export const postLessonAction = (lesson: Lesson): LessonActionTypes => {
  return {
    type: POST_LESSON,
    payload: lesson,
  };
};
