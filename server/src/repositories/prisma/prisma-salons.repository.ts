import { Prisma, Salon } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { SalonsRepository } from "../salons.repository";

export class PrismaSalonsRepository implements SalonsRepository {
  async create(data: Prisma.SalonCreateInput, userIds: string[]): Promise<Salon> {
    try {
      const salon = await prisma.salon.create({
        data: {
          ...data,
          User: {
            connect: userIds.map(userId => ({ id: userId })),
          },
        },
      });
      return salon;
    } catch (error) {
      console.error("Erro ao criar salão:", error);
      throw error;
    }
  }

  async update(id: string, data: Prisma.SalonUpdateInput): Promise<Salon> {
    const salon = await prisma.salon.update({
      where: {
        id
      },
      data
    });

    return salon;
  }
}
