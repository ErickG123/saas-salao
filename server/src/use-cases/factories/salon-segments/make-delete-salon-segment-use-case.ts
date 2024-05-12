import { PrismaSalonSegmentsRepository } from "../../../repositories/prisma/prisma-salon-segments.repository";
import { DeletesalonSegmentUseCase } from "../../salon-segments/delete-salon-segment.use-case";

export function makeDeleteSalonSegmentUseCase() {
  return new DeletesalonSegmentUseCase(new PrismaSalonSegmentsRepository);
}
