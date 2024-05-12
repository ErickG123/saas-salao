import { SalonSegmentsRepository } from "../../repositories/salon-segments.repository";

interface DeletesalonSegmentUseCaseRequest {
  id: string
}

export class DeletesalonSegmentUseCase {
  constructor(private salonSegmentsRepository: SalonSegmentsRepository) { }

  async execute({ id }: DeletesalonSegmentUseCaseRequest) {
    this.salonSegmentsRepository.delete(id);
  }
}
