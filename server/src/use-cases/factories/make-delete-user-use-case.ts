import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users.repository";
import { DeleteUserUseCase } from "../delete-user.use-case";

export function makeDeleteUserUseCase() {
  return new DeleteUserUseCase(new PrismaUsersRepository);
}
