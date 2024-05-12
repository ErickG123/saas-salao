import { Prisma, Service } from "@prisma/client";
import { ServicesRepository } from "../services.repository";
import { prisma } from "../../lib/prisma";

export class PrismaServicesRepository implements ServicesRepository {
  async create(data: Prisma.ServiceCreateInput): Promise<Service> {
    try {
      const service = await prisma.service.create({ data });
      return service;
    } catch (error) {
      console.error("Erro ao criar o serviço:", error);
      throw error;
    }
  }

  async update(id: string, data: Prisma.ServiceUpdateInput): Promise<Service> {
    const service = prisma.service.update({
      where: {
        id
      },
      data
    })

    return service;
  }

  async delete(id: string): Promise<void> {
    await prisma.service.delete({
      where: {
        id
      }
    });
  }
}
