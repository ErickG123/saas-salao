import { PrismaSalonsRepository } from "../../../repositories/prisma/prisma-salons.repository";
import { FindAllSalonsUseCase } from "../../salons/find-all-salons.use-case";

export function makeFindAllSalonsUseCase() {
  return new FindAllSalonsUseCase(new PrismaSalonsRepository);
}
