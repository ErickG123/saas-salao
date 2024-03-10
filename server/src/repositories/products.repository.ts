import { Prisma, Product } from "@prisma/client";

export interface ProductsRepository {
  create(data: Prisma.ProductCreateInput): Promise<Product>
}
