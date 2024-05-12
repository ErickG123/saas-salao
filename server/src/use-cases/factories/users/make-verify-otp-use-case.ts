import { PrismaUsersRepository } from "../../../repositories/prisma/prisma-users.repository";
import { VerifyOtpUseCase } from "../../users/verify-otp.use-case";

export function makeVerifyOtpUseCase() {
  return new VerifyOtpUseCase(new PrismaUsersRepository);
}
