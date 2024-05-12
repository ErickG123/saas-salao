import { Prisma, Service } from "@prisma/client";

export interface ServicesRepository {
  create(data: Prisma.ServiceCreateInput): Promise<Service>
  update(id: string, data: Prisma.ServiceUpdateInput): Promise<Service>
  delete(id: string): void
}
