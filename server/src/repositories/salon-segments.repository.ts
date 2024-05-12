import { SalonSegment } from "@prisma/client";

export interface SalonSegmentsRepository {
  create(salonId: string, segmentId: string): Promise<SalonSegment>
  delete(id: string): void
}
