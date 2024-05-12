import { PrimsaCategoriesRepository } from "../../../repositories/prisma/prisma-categories.repository";
import { CreateCategoryUseCase } from "../../categories/create-category.use-case";

export function makeCreateCategoryUseCase() {
  return new CreateCategoryUseCase(new PrimsaCategoriesRepository);
}
