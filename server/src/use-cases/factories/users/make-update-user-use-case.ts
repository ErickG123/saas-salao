import { PrismaUsersRepository } from "../../../repositories/prisma/prisma-users.repository";
import { UpdateUserUseCase } from "../../users/update-user.use-case";

export function makeUpdateUserUseCase() {
  return new UpdateUserUseCase(new PrismaUsersRepository);
}
