import { Category, Prisma } from "@prisma/client";
import { CategoriesRepository } from "../categories.repository";
import { prisma } from "../../lib/prisma";

export class PrimsaCategoriesRepository implements CategoriesRepository {
  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    try {
      const category = await prisma.category.create({ data });
      return category;
    } catch (error) {
      console.error("Erro ao criar a categoria:", error);
      throw error;
    }
  }

  async update(id: string, data: Prisma.CategoryUpdateInput): Promise<Category> {
    const category = prisma.category.update({
      where: {
        id
      },
      data
    })

    return category;
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({
      where: {
        id
      }
    });
  }
}
