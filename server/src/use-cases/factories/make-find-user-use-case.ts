import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users.repository";
import { FindUserUseCase } from "../find-user.use-case";

export function makeFindUserUseCase() {
  return new FindUserUseCase(new PrismaUsersRepository);
}
