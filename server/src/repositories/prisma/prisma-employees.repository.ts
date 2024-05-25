import { Employee, Prisma } from "@prisma/client";
import { EmployeesRepository } from "../employees.repository";
import { prisma } from "../../lib/prisma";

export class PrismaEmployeesRepository implements EmployeesRepository {
    async create(data: Prisma.EmployeeCreateInput): Promise<Employee> {
        try {
            const employee = await prisma.employee.create({ data });
            return employee;
        } catch (error) {
            console.error("Erro ao cadastrar o funcionário:", error);
            throw error;
        }
    }

    async update(id: string, data: Prisma.EmployeeUpdateInput): Promise<Employee> {
        const employee = await prisma.employee.update({
            where: {
                id
            },
            data
        });

        return employee;
    }

    async delete(id: string): Promise<void> {
        await prisma.employee.delete({
            where: {
                id
            }
        });
    }
}
