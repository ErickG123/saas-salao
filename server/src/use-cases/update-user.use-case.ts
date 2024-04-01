import { User } from "@prisma/client"
import { UsersRepository } from "../repositories/users.repository"

interface UpdateUserUseCaseRequest {
  name: string
  email: string
  phone: string
}

interface UpdateUserUseCaseRequestParams {
  id: string
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ id }: UpdateUserUseCaseRequestParams, {
    name,
    email,
    phone
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const user = await this.usersRepository.update(
      id,
      {
        name,
        email,
        phone
      }
    )

    return { user };
  }
}
