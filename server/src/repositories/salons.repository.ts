import { Prisma, Salon } from "@prisma/client";

export interface SalonsRepository {
  create(data: Prisma.SalonCreateInput, userIds: string[]): Promise<Salon>
  update(id: string, data: Prisma.SalonUpdateInput): Promise<Salon>
  findAll(): Promise<Salon[] | null>
  findById(id: string): Promise<Salon | null>
}
