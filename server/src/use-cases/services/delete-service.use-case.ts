import { ServicesRepository } from "../../repositories/services.repository";

interface DeleteServiceUseCaseRequest {
  id: string
}

export class DeleteServiceUseCase {
  constructor(private serviceRepository: ServicesRepository) { }

  async execute({ id }: DeleteServiceUseCaseRequest): Promise<void> {
    this.serviceRepository.delete(id);
  }
}
