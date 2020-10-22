import { Session } from "./interfaces";

export const GET_SESSIONS = "GET_SESSIONS";
export const POST_SESSION = "POST_SESSION";

export interface GetSessionsStateType {
  list: Session[];
  new: Session | null
}

interface GetSessionsActionType {
  type: typeof GET_SESSIONS;
  payload: Session[];
}

interface PostSessionActionType {
  type: typeof POST_SESSION;
  payload: Session;
}

export type SessionActionTypes = GetSessionsActionType | PostSessionActionType;
