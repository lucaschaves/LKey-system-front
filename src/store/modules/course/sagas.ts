import { takeLatest, call, put, all } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import api from "../../../services/api";
import { CREATE_COURSE, GET_COURSE } from "./types";

export function* courseCreate({
    payload,
}: ActionType<typeof actions.courseCreate>) {
    try {
        const { data } = yield call(api.post, "/course", payload);

        yield put(actions.courseCreateSuccess(data));
    } catch (err) {
        yield put(actions.courseCreateFailure());
    }
}

export function* courseList(): ActionType<typeof actions.courseList> {
    try {
        const { data } = yield call(api.get, "/course");

        yield put(actions.courseListSuccess(data));
    } catch (err) {
        yield put(actions.courseListFailure());
    }
}

export default all([
    takeLatest(CREATE_COURSE, courseCreate),
    takeLatest(GET_COURSE, courseList),
]);
