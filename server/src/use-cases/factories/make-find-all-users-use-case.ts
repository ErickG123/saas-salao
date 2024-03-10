import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users.repository";
import { FindAllUsersUseCase } from "../find-all-users.use-case";

export function makeFindAllUsersUseCase() {
  return new FindAllUsersUseCase(new PrismaUsersRepository);
}
