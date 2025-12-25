import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/CreateOneUseCase";
import { DeleteOneUseCase } from "../../application/use-cases/user/DeleteOneUseCase";
import { FindOneByIdUseCase } from "../../application/use-cases/user/FindByIdUseCase";
import { GetAllUseCase } from "../../application/use-cases/user/GetAllUseCase";
import { UpdateOneUseCase } from "../../application/use-cases/user/UpdateOneUseCase";
import { CreateUserDTO } from "../../application/use-cases/user/dtos/CreateUserDTO";
import { UpdateUserDTO } from "../../application/use-cases/user/dtos/UpdateUserDTO";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserRepositoryImpl } from "../repositories/UserRepository.impl";

export class UserController {
  private repository: IUserRepository;
  constructor() {
    this.repository = new UserRepositoryImpl();
  }
  getAllUsers(req: Request, res: Response) {
    const useCase = new GetAllUseCase(this.repository);
    const users = useCase.execute();
    return res.json(users);
  }

  createUser(req: Request, res: Response) {
    const useCase = new CreateUserUseCase(this.repository);
    const { name, email, password } = req.body;
    const userData = new CreateUserDTO(name, email, password);
    const newUser = useCase.execute(userData);
    res.status(201).json(newUser);
  }

  getUserById(req: Request, res: Response) {
    const useCase = new FindOneByIdUseCase(this.repository);
    const { id } = req.params;
    const user = useCase.execute(id);
    res.json(user);
  }

  updateUserById(req: Request, res: Response) {
    const useCase = new UpdateOneUseCase(this.repository);
    const { id } = req.params;
    const { name, email, password } = req.body;
    const userData = new UpdateUserDTO(id, name, email, password);
    const updatedUser = useCase.execute(userData);
    res.json(updatedUser);
  }

  deleteUserById(req: Request, res: Response) {
    const useCase = new DeleteOneUseCase(this.repository);
    const { id } = req.params;
    useCase.execute(id);
    res.status(204).send({ message: "User deleted successfully" });
  }
}
