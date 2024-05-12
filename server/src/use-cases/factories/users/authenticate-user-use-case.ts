import { PrismaUsersRepository } from "../../../repositories/prisma/prisma-users.repository";
import { AuthenticateUserUseCase } from "../../users/authenticate-user.use-case";

export function makeAuthenticateUserUseCase() {
  return new AuthenticateUserUseCase(new PrismaUsersRepository);
}
