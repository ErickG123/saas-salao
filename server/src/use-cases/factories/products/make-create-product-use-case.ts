import { PrismaProductsRepository } from "../../../repositories/prisma/prisma-products.repository";
import { CreateProductUseCase } from "../../products/create-product.use-case";

export function makeCreateProductUseCase() {
  return new CreateProductUseCase(new PrismaProductsRepository);
}
