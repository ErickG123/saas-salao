import { Salon } from "@prisma/client";
import { SalonsRepository } from "../../repositories/salons.repository";

interface FindAllSalonsUseCaseResponse {
  salons: Salon[]
}

export class FindAllSalonsUseCase {
  constructor(private salonsRepository: SalonsRepository) { }

  async execute(): Promise<FindAllSalonsUseCaseResponse> {
    const salons = await this.salonsRepository.findAll();

    return { salons: salons ?? [] };
  }
}
