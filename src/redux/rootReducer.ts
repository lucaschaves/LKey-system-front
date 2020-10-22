import { combineReducers } from "redux";
import { getCoursesReducer } from "./modules/course/reducer";
import { getGroupsReducer } from "./modules/group/reducer";
import { getLessonsReducer } from "./modules/lesson/reducer";
import { getSessionsReducer } from "./modules/session/reducer";
import { getUsersReducer } from "./modules/user/reducer";

const rootReducer = combineReducers({
  courses: getCoursesReducer,
  groups: getGroupsReducer,
  lessons: getLessonsReducer,
  sessions: getSessionsReducer,
  users: getUsersReducer,
});

export default rootReducer;
