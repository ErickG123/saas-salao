import { PrismaServicesRepository } from "../../../repositories/prisma/prisma-services.repository";
import { UpdateServiceUseCase } from "../../services/update-service.use-case";

export function makeUpdateServiceUseCase() {
  return new UpdateServiceUseCase(new PrismaServicesRepository);
}
