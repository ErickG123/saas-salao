import { PrismaEmployeesRepository } from "../../../repositories/prisma/prisma-employees.repository";
import { CreateEmployeeUseCase } from "../../employees/create-employee.use-case";

export function makeCreateEmployeeUseCase() {
    return new CreateEmployeeUseCase(new PrismaEmployeesRepository);
}
