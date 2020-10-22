import { GET_SESSIONS, POST_SESSION, SessionActionTypes } from "./types";
import { Session } from "./interfaces";

export const getSessionsAction = (sessions: Session[]): SessionActionTypes => {
  return {
    type: GET_SESSIONS,
    payload: sessions,
  };
};

export const postSessionAction = (session: Session): SessionActionTypes => {
  return {
    type: POST_SESSION,
    payload: session,
  };
};
