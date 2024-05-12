import { CategoriesRepository } from "../../repositories/categories.repository";

interface DeleteCategoryUseCaseRequest {
  id: string
}

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) { }

  async execute({ id }: DeleteCategoryUseCaseRequest): Promise<void> {
    this.categoryRepository.delete(id);
  }
}
