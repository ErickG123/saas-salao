import { Category } from "@prisma/client"
import { CategoriesRepository } from "../../repositories/categories.repository"

interface UpdateCategoryUseCaseRequest {
  name: string
}

interface UpdateCategoryUseCaseRequestParams {
  id: string
}

interface UpdateCategoryUseCaseResponse {
  category: Category
}

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  async execute({ id }: UpdateCategoryUseCaseRequestParams, {
    name
  }: UpdateCategoryUseCaseRequest): Promise<UpdateCategoryUseCaseResponse> {
    const category = await this.categoriesRepository.update(
      id,
      {
        name
      }
    );

    return { category };
  }
}
