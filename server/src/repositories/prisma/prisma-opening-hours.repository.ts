import { OpeningHour, Prisma } from "@prisma/client";
import { OpeningHoursRepository } from "../opening-hours.repository";
import { prisma } from "../../lib/prisma";

export class PrismaOpeningHoursRepository implements OpeningHoursRepository {
  async create(data: Prisma.OpeningHourCreateInput): Promise<OpeningHour> {
    try {
      const openingHour = await prisma.openingHour.create({ data });
      return openingHour;
    } catch (error) {
      console.error("Erro ao criar o horário de atendimento:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.openingHour.delete({
      where: {
        id
      }
    });
  }
}
