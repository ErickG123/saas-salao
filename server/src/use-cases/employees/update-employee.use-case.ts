import { Employee } from "@prisma/client"
import { EmployeesRepository } from "../../repositories/employees.repository"

interface UpdateEmployeeUseCaseRequest {
    name: string
    email: string
    address: string
    number: number
    complement: string
    district: string
    zipcode: string
    city: string
    state: string
}

interface UpdateEmployeeUseCaseRequestParams {
    id: string
}

interface UpdateEmployeeUseCaseResponse {
    employee: Employee
}

export class UpdateEmployeeUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute({ id }: UpdateEmployeeUseCaseRequestParams, {
        name,
        email,
        address,
        number,
        complement,
        district,
        zipcode,
        city,
        state
    }: UpdateEmployeeUseCaseRequest): Promise<UpdateEmployeeUseCaseResponse> {
        const employee = await this.employeesRepository.update(
            id,
            {
                name,
                email,
                address,
                number,
                complement,
                district,
                zipcode,
                city,
                state
            }
        );

        return { employee };
    }
}
