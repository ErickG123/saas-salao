import { OpeningHoursRepository } from "../../repositories/opening-hours.repository";

interface DeleteOpeningHourUseCaseRequest {
  id: string
}

export class DeleteOpeningHourUseCase {
  constructor(private openingHoursRepository: OpeningHoursRepository) { }

  async execute({ id }: DeleteOpeningHourUseCaseRequest): Promise<void> {
    this.openingHoursRepository.delete(id);
  }
}
