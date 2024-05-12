import { OpeningHour, Prisma } from "@prisma/client";

export interface OpeningHoursRepository {
  create(data: Prisma.OpeningHourCreateInput): Promise<OpeningHour>
  delete(id: string): void
}
