import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users.repository";
import { UserNotFound } from "./errors/user-not-found.error";

interface ForgotPasswordUseCaseRequest {
  email: string
}

interface ForgotPasswordUseCaseResponse {
  user: User
}

export class ForgotPasswordUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ email }: ForgotPasswordUseCaseRequest): Promise<ForgotPasswordUseCaseResponse> {
    const user = await this.usersRepository.forgotPassword(email);

    if (!user) throw new UserNotFound();

    return { user };
  }
}
