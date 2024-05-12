import { SalonSegment } from "@prisma/client";
import { SalonSegmentsRepository } from "../../repositories/salon-segments.repository";

interface CreateSalonSegmentUseCaseRequest {
  salonId: string
  segmentId: string
}

interface CreateSalonSegmentUseCaseResponse {
  salonSegment: SalonSegment
}

export class CreateSalonSegmentUseCase {
  constructor(private salonSegmentsRepository: SalonSegmentsRepository) { }

  async execute({
    salonId,
    segmentId
  }: CreateSalonSegmentUseCaseRequest): Promise<CreateSalonSegmentUseCaseResponse> {
    const salonSegment = await this.salonSegmentsRepository.create(
      salonId,
      segmentId
    );

    return { salonSegment };
  }
}
