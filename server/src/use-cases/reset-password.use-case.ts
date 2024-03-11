import { User } from "@prisma/client"
import { UsersRepository } from "../repositories/users.repository"
import { UserNotFound } from "./errors/user-not-found.error"
import { hash } from "bcrypt"

interface ResetPasswordUseCaseRequest {
  email: string
  password: string
}

interface ResetPasswordUseCaseRequestQuery {
  resetToken: string
}

interface ResetPasswordUseCaseResponse {
  user: User
}

export class ResetPasswordUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ resetToken }: ResetPasswordUseCaseRequestQuery, {
    email,
    password
  }: ResetPasswordUseCaseRequest): Promise<ResetPasswordUseCaseResponse> {
    const password_hash = await hash(password, 8);

    const user = await this.usersRepository.resetPassword(email, password_hash, resetToken);

    if (!user) throw new UserNotFound();

    return { user };
  }
}
