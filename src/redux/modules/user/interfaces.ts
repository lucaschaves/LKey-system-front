export interface User {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  dateBirth: string;
  createdAt?: Date;
  updatedAt?: Date;
}
