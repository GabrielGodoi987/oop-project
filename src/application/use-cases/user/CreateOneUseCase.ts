import { User } from "../../../domain/entity/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { CreateUserDTO } from "./dtos/CreateUserDTO";

// this layer is responsible for application logic
export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  // this method is the action of the use case
  async execute(input: CreateUserDTO): Promise<User> {
    const { name, email, password } = input;
    const user = new User(null, name, email, password);

    // Here we would normally persist the user in a database
    await this.userRepository.create(user);

    return user;
  }
}
