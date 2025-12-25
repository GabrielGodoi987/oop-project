import { User } from "../../domain/entity/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class UserRepositoryImpl implements IUserRepository {
  // in memory storage for demonstration purposes
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.findIndex((u) => u.id === id);
    return user !== -1 ? this.users[user] : null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(user: User): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      return true;
    }
    return false;
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);
    return this.users.length < initialLength;
  }
}
