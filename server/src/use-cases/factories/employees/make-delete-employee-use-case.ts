import { PrismaEmployeesRepository } from "../../../repositories/prisma/prisma-employees.repository";
import { DeleteEmployeeUseCase } from "../../employees/delete-employee.use-case";

export function makeDeleteEmployeeUseCase() {
    return new DeleteEmployeeUseCase(new PrismaEmployeesRepository);
}
