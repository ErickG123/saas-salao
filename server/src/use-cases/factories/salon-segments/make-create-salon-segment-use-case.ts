import { PrismaSalonSegmentsRepository } from "../../../repositories/prisma/prisma-salon-segments.repository";
import { CreateSalonSegmentUseCase } from "../../salon-segments/create-salon-segment.use-case";

export function makeCreateSalonSegmentUseCase() {
  return new CreateSalonSegmentUseCase(new PrismaSalonSegmentsRepository);
}
