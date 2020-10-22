import { Lesson } from "./interfaces";

export const GET_LESSONS = "GET_LESSONS";
export const POST_LESSON = "POST_LESSON";

export interface GetLessonsStateType {
  list: Lesson[];
  new: Lesson | null
}

interface GetLessonsActionType {
  type: typeof GET_LESSONS;
  payload: Lesson[];
}

interface PostLessonActionType {
  type: typeof POST_LESSON;
  payload: Lesson;
}

export type LessonActionTypes = GetLessonsActionType | PostLessonActionType;
