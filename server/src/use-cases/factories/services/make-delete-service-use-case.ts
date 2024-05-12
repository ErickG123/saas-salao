import { PrismaServicesRepository } from "../../../repositories/prisma/prisma-services.repository";
import { DeleteServiceUseCase } from "../../services/delete-service.use-case";

export function makeDeleteServiceUseCase() {
  return new DeleteServiceUseCase(new PrismaServicesRepository);
}
