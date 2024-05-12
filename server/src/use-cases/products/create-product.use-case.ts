import { Product } from "@prisma/client"
import { ProductsRepository } from "../../repositories/products.repository"

interface CreateProductUseCaseRequest {
  name: string
}

interface CreateProductUseCaseResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) { }

  async execute({ name }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await this.productsRepository.create({ name });

    return { product };
  }
}
