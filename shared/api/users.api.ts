import { Http } from './http';
import { CVHeader, User } from "@/shared/types";
export const createUser = (data: CVHeader) => {
  return Http.post('/users', data);
}

export const updateUser = (id: string, data: Partial<User>) => {
  return Http.put(`/users/${id}`, data);
}
