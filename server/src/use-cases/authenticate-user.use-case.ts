import { User } from "@prisma/client"
import { UsersRepository } from "../repositories/users.repository"
import { InvalidCredentialsError } from "./errors/invalid-credentials-error"
import { compare } from "bcrypt"

interface AuthenticateUserUseCaseResquest {
  email: string
  password: string
}

interface AuthenticateUserUseCaseResponse {
  user: User
}

export class AuthenticateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    email,
    password
  }: AuthenticateUserUseCaseResquest): Promise<AuthenticateUserUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const doesPasswordMatches = await compare(password, user.password);

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError();
    }

    return { user };
  }
}
