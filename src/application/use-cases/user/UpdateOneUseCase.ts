import { User } from "../../../domain/entity/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { UpdateUserDTO } from "./dtos/UpdateUserDTO";

export class UpdateOneUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: UpdateUserDTO): Promise<boolean> {
    const doesUserExists = await this.userRepository.findById(dto.id);

    if (!doesUserExists) {
      throw new Error("User not found");
    }

    const { id, name, email, password } = doesUserExists;
    const user = new User(id, name, email, password);

    return await this.userRepository.update(user);
  }
}
