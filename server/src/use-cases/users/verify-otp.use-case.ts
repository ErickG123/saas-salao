import { User } from "@prisma/client"
import { UsersRepository } from "../../repositories/users.repository"
import { UserNotFound } from "../errors/user-not-found.error"

interface VerifyOtpUseCaseResquest {
  email: string
  otpCode: string
}

interface VerifyOtpUseCaseResponse {
  user: User
}

export class VerifyOtpUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ email, otpCode }: VerifyOtpUseCaseResquest): Promise<VerifyOtpUseCaseResponse> {
    const user = await this.usersRepository.verifyOtp(email, otpCode);

    if (!user) throw new UserNotFound();

    return { user };
  }
}
