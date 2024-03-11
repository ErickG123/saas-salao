import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users.repository";
import { ResetPasswordUseCase } from "../reset-password.use-case";

export function makeResetPasswordUseCase() {
  return new ResetPasswordUseCase(new PrismaUsersRepository);
}
