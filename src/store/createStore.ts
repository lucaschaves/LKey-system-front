import { createStore, applyMiddleware, Middleware, Reducer } from "redux";
import { CourseAction, CourseState } from "./modules/course/types";

export interface StoreState {
    course: CourseState;
}

export type StoreAction = CourseAction;

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
};
