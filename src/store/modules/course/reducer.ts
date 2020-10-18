import {
    CourseState,
    CourseAction,
    CREATE_COURSE,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    GET_COURSE,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
} from "./types";

const initialState: CourseState = {
    name: "",
    description: "",
    error: false,
};

export default function course(
    state = initialState,
    action: CourseAction
): CourseState {
    switch (action.type) {
        case CREATE_COURSE:
            return {
                name: action.payload.name,
                description: action.payload.description,
                error: false,
            };
        case CREATE_COURSE_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                error: false,
            };
        case CREATE_COURSE_FAILURE:
            return {
                ...state,
                error: false,
            };

        case GET_COURSE:
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                error: false,
            };
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                error: false,
            };
        case GET_COURSE_FAILURE:
            return {
                ...state,
                error: false,
            };
        default:
            return state;
    }
}
