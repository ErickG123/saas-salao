import { PrismaSalonsRepository } from "../../../repositories/prisma/prisma-salons.repository";
import { UpdateSalonUseCase } from "../../salons/update-salon.use-case";

export function makeUpdateSalonUseCase() {
  return new UpdateSalonUseCase(new PrismaSalonsRepository);
}
