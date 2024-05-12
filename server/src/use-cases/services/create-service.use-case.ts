import { Service } from "@prisma/client"
import { ServicesRepository } from "../../repositories/services.repository"

interface CreateServiceUseCaseRequest {
  name: string
  description: string
  minValue: number
  maxValue: number
  averageTime: number
  categoryId: string
}

interface CreateServiceUseCaseResponse {
  service: Service
}

export class CreateServiceUseCase {
  constructor(private servicesRepository: ServicesRepository) { }

  async execute({
    name,
    description,
    minValue,
    maxValue,
    averageTime,
    categoryId
  }: CreateServiceUseCaseRequest): Promise<CreateServiceUseCaseResponse> {
    const service = await this.servicesRepository.create({
      name,
      description,
      minValue,
      maxValue,
      averageTime,
      category: { connect: { id: categoryId } }
    });

    return { service };
  }
}
