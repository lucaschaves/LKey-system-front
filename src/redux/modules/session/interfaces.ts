import { Course } from "../course/interfaces";

export interface Session {
  id?: number;
  name: string;
  description?: string;
  course: Course;
  enabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
