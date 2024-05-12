import { Salon } from "@prisma/client"
import { SalonsRepository } from "../../repositories/salons.repository"

interface UpdateSalonUseCaseRequest {
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

interface UpdateSalonUseCaseRequestParams {
  id: string
}

interface UpdateSalonUseCaseResponse {
  salon: Salon
}

export class UpdateSalonUseCase {
  constructor(private salonsRepository: SalonsRepository) { }

  async execute({ id }: UpdateSalonUseCaseRequestParams, {
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
  }: UpdateSalonUseCaseRequest): Promise<UpdateSalonUseCaseResponse> {
    const salon = await this.salonsRepository.update(
      id,
      {
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
      }
    );

    return { salon };
  }
}
