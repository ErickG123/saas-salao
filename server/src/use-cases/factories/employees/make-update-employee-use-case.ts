import { PrismaEmployeesRepository } from "../../../repositories/prisma/prisma-employees.repository";
import { UpdateEmployeeUseCase } from "../../employees/update-employee.use-case";

export function makeUpdateEmployeeUseCase() {
    return new UpdateEmployeeUseCase(new PrismaEmployeesRepository);
}
