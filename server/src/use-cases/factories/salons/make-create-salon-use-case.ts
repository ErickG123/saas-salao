import { PrismaSalonsRepository } from "../../../repositories/prisma/prisma-salons.repository";
import { CreateSalonUseCase } from "../../salons/create-salon.use-case";

export function makeCreateSalonUseCase() {
  return new CreateSalonUseCase(new PrismaSalonsRepository);
}
