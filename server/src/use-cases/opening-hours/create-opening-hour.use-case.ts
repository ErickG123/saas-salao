import { OpeningHour } from "@prisma/client";
import { OpeningHoursRepository } from "../../repositories/opening-hours.repository";

interface CreateOpeningHourUseCaseRequest {
  weekDay: string
  startTime: string
  endTime: string
  salonId: string
}

interface CreateOpeningHourUseCaseResponse {
  openingHour: OpeningHour
}

export class CreateOpeningHourUseCase {
  constructor(private openingHoursRepository: OpeningHoursRepository) { }

  async execute({
    weekDay,
    startTime,
    endTime,
    salonId
  }: CreateOpeningHourUseCaseRequest,): Promise<CreateOpeningHourUseCaseResponse> {
    const openingHour = await this.openingHoursRepository.create({
      weekDay,
      startTime,
      endTime,
      salon: { connect: { id: salonId } }
    });

    return { openingHour };
  }
}
