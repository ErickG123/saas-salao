import { PrismaOpeningHoursRepository } from "../../../repositories/prisma/prisma-opening-hours.repository";
import { DeleteOpeningHourUseCase } from "../../opening-hours/delete-opening-hour.use-case";

export function makeDeleteOpeningHourUseCase() {
  return new DeleteOpeningHourUseCase(new PrismaOpeningHoursRepository);
}
