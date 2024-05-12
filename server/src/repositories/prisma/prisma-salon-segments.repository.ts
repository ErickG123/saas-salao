import { SalonSegment } from "@prisma/client";
import { SalonSegmentsRepository } from "../salon-segments.repository";
import { prisma } from "../../lib/prisma";

export class PrismaSalonSegmentsRepository implements SalonSegmentsRepository {
  async create(salonId: string, segmentId: string): Promise<SalonSegment> {
    try {
      const salonSegment = await prisma.salonSegment.create({
        data: {
          salonId,
          segmentId
        }
      });
      return salonSegment
    } catch (error) {
      console.error("Erro ao adicionar o segmento:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.salonSegment.delete({
      where: {
        id,
      }
    });
  }
}
