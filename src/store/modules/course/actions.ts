import { action } from "typesafe-actions";
import {
    CourseState,
    CREATE_COURSE,
    CREATE_COURSE_FAILURE,
    CREATE_COURSE_SUCCESS,
    GET_COURSE,
    GET_COURSE_FAILURE,
    GET_COURSE_SUCCESS,
} from "./types";

export function courseCreate({ name, description }: CourseState) {
    return action(CREATE_COURSE, {
        name,
        description,
    });
}

export function courseCreateSuccess(data: CourseState) {
    const { name, description } = data;
    return action(CREATE_COURSE_SUCCESS, {
        name,
        description,
    });
}

export function courseCreateFailure() {
    return action(CREATE_COURSE_FAILURE);
}

export function courseList() {
    return action(GET_COURSE);
}

export function courseListSuccess(data: CourseState) {
    const { name, description } = data;
    return action(GET_COURSE_SUCCESS, {
        name,
        description,
    });
}

export function courseListFailure() {
    return action(GET_COURSE_FAILURE);
}
