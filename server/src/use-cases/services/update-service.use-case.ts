import { Service } from "@prisma/client"
import { ServicesRepository } from "../../repositories/services.repository"

interface UpdateServiceUseCaseRequest {
  name: string
  description: string
  minValue: number
  maxValue: number
  averageTime: number
}

interface UpdateServiceUseCaseRequestParams {
  id: string
}

interface UpdateServiceUseCaseResponse {
  service: Service
}

export class UpdateServiceUseCase {
  constructor(private servicesRepository: ServicesRepository) { }

  async execute({ id }: UpdateServiceUseCaseRequestParams, {
    name,
    description,
    minValue,
    maxValue,
    averageTime
  }: UpdateServiceUseCaseRequest): Promise<UpdateServiceUseCaseResponse> {
    const service = await this.servicesRepository.update(
      id,
      {
        name,
        description,
        minValue,
        maxValue,
        averageTime
      }
    );

    return { service };
  }
}
