import { User } from "../../../domain/entity/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class GetAllUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
