import { User, Prisma } from "@prisma/client";

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findAll(): Promise<User[] | null>
  create(data: Prisma.UserCreateInput): Promise<User>
  update(id: string, data: Prisma.UserUpdateInput): Promise<User>
  delete(id: string): void
  verifyOtp(email: string, otpCode: string): Promise<User>
  forgotPassword(email: string): Promise<User>
  resetPassword(email: string, password: string, token: string): Promise<User>
}
