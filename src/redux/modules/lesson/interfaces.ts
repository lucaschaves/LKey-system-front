import { Session } from "../session/interfaces";

export interface Lesson {
  id?: number;
  name: string;
  description?: string;
  url: string;
  session: Session;
  enabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
