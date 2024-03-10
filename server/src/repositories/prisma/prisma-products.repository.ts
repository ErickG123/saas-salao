import { Prisma, Product } from "@prisma/client";
import { ProductsRepository } from "../products.repository";
import { prisma } from "../../lib/prisma";

export class PrismaProductsRepository implements ProductsRepository {
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const product = prisma.product.create({ data });

    return product;
  }
}
