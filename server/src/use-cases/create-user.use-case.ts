import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users.repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists.error";
import { hash } from "bcrypt";

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
  phone: number
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    name,
    email,
    password,
    phone
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userByEmail = await this.usersRepository.findByEmail(email);

    if (userByEmail) throw new UserAlreadyExistsError();

    const password_hash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: password_hash,
      phone
    });

    return { user };
  }
}
