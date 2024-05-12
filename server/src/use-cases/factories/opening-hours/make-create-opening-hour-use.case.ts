import { PrismaOpeningHoursRepository } from "../../../repositories/prisma/prisma-opening-hours.repository";
import { CreateOpeningHourUseCase } from "../../opening-hours/create-opening-hour.use-case";

export function makeCreateOpeningHourUseCase() {
  return new CreateOpeningHourUseCase(new PrismaOpeningHoursRepository);
}
