import { PrismaSalonsRepository } from "../../../repositories/prisma/prisma-salons.repository";
import { FindSalonUseCase } from "../../salons/find-salon.use-case";

export function makeFindSalonUseCase() {
  return new FindSalonUseCase(new PrismaSalonsRepository);
}
