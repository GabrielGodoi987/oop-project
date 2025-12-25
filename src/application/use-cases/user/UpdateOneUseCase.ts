import { User } from "../../../domain/entity/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { UpdateUserDTO } from "./dtos/UpdateUserDTO";

export class UpdateOneUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(dto: UpdateUserDTO): Promise<boolean> {
    const { id, name, email, password } = dto;

    const doesUserExists = await this.userRepository.findById(dto.id);

    if (!doesUserExists) {
      throw new Error("User not found");
    }

    const user = new User(
      id,
      name || doesUserExists.name,
      email || doesUserExists.email,
      password || doesUserExists.password
    );

    return await this.userRepository.update(user);
  }
}
