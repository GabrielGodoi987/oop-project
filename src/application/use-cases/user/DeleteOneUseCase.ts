import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class DeleteOneUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<boolean> {
    const doesUserExists = await this.userRepository.findById(id);

    if (!doesUserExists) {
      throw new Error("User not found");
    }

    return await this.userRepository.delete(id);
  }
}
