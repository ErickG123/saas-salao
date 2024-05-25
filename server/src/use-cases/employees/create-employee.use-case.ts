import { Employee } from "@prisma/client"
import { EmployeesRepository } from "../../repositories/employees.repository"

interface CreateEmployeeUseCaseRequest {
    name: string
    email: string
    address: string
    number: number
    complement: string
    district: string
    zipcode: string
    city: string
    state: string
    salonId: string
}

interface CreateEmployeeUseCaseResponse {
    employee: Employee
}

export class CreateEmployeeUseCase {
    constructor(private employeesRepository: EmployeesRepository) { }

    async execute({
        name,
        email,
        address,
        number,
        complement,
        district,
        zipcode,
        city,
        state,
        salonId
    }: CreateEmployeeUseCaseRequest): Promise<CreateEmployeeUseCaseResponse> {
        const employee = await this.employeesRepository.create({
            name,
            email,
            address,
            number,
            complement,
            district,
            zipcode,
            city,
            state,
            salon: { connect: { id: salonId } }
        });

        return { employee };
    }
}
