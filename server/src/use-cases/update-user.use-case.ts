import { User } from "@prisma/client"
import { UsersRepository } from "../repositories/users.repository"
import { hash } from "bcrypt"

interface UpdateUserUseCaseRequest {
  name: string
  email: string
  password: string
  phone: number
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
    password,
    phone
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const password_hash = await hash(password, 8);

    const user = await this.usersRepository.update(
      id,
      {
        name,
        email,
        password: password_hash,
        phone
      }
    )

    return { user };
  }
}
