import { Category } from "@prisma/client";
import { CategoriesRepository } from "../../repositories/categories.repository";

interface CreateCategoryUseCaseRequest {
  name: string
  salonId: string
}

interface CreateCategoryUseCaseResponse {
  category: Category
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  async execute({
    name,
    salonId
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const category = await this.categoriesRepository.create({
      name,
      salon: { connect: { id: salonId } }
    });

    return { category };
  }
}
