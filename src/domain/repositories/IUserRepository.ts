import { User } from "../entity/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(user: User): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
