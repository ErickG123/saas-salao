import { PrismaServicesRepository } from "../../../repositories/prisma/prisma-services.repository";
import { CreateServiceUseCase } from "../../services/create-service.use-case";

export function makeCreateServiceUseCase() {
  return new CreateServiceUseCase(new PrismaServicesRepository);
}
