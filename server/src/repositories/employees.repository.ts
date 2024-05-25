import { Employee, Prisma } from "@prisma/client";

export interface EmployeesRepository {
    create(data: Prisma.EmployeeCreateInput): Promise<Employee>
    update(id: string, data: Prisma.EmployeeUpdateInput): Promise<Employee>
    delete(id: string): void
}
