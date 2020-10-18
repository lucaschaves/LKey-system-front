import { combineReducers } from "redux";

import { StoreState } from "../createStore";

import course from "./course/reducer";

export default combineReducers<StoreState>({
    course,
});
