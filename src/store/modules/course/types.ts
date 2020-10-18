import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CourseAction = ActionType<typeof actions>;

export interface CourseState {
    readonly name: string;
    readonly description?: string;
    readonly error: boolean;
}

/* ################ Create ################ */
export const CREATE_COURSE = "@course/CREATE_COURSE";
export const CREATE_COURSE_SUCCESS = "@course/CREATE_COURSE_SUCCESS";
export const CREATE_COURSE_FAILURE = "@course/CREATE_COURSE_FAILURE";

/* ################ List ################ */
export const GET_COURSE = "@course/GET_COURSE";
export const GET_COURSE_SUCCESS = "@course/GET_COURSE_SUCCESS";
export const GET_COURSE_FAILURE = "@course/GET_COURSE_FAILURE";
