import { Salon } from "@prisma/client";
import { SalonsRepository } from "../../repositories/salons.repository";
import { SalonNotFound } from "../errors/salon-not-found.error";

interface FindSalonUseCaseRequest {
  id: string
}

interface FindSalonUseCaseResponse {
  salon: Salon
}

export class FindSalonUseCase {
  constructor(private salonsRepository: SalonsRepository) { }

  async execute({ id }: FindSalonUseCaseRequest): Promise<FindSalonUseCaseResponse> {
    const salon = await this.salonsRepository.findById(id);

    if (!salon) throw new SalonNotFound();

    return { salon };
  }
}
