import { Salon } from "@prisma/client"
import { SalonsRepository } from "../../repositories/salons.repository"

interface CreateSalonUseCaseRequest {
  companyName: string
  document: string
  description: string
  zipcode: number
  address: string
  district: string
  city: string
  state: string
  number: number
  latitude: string
  longitude: string
}

interface CreateSalonUseCaseResponse {
  salon: Salon
}

export class CreateSalonUseCase {
  constructor(private salonsRepository: SalonsRepository) { }

  async execute({
    companyName,
    document,
    description,
    zipcode,
    address,
    district,
    city,
    state,
    number,
    latitude,
    longitude
  }: CreateSalonUseCaseRequest,
    userIds: string[]): Promise<CreateSalonUseCaseResponse> {
    const salon = await this.salonsRepository.create({
      companyName,
      document,
      description,
      zipcode,
      district,
      address,
      city,
      state,
      number,
      latitude,
      longitude
    }, userIds);

    return { salon };
  }
}
