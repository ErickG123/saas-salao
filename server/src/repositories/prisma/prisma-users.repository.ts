import { Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { UsersRepository } from "../users.repository";

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }

  async findAll(): Promise<User[] | null> {
    const users = await prisma.user.findMany();

    return users;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({ data });

    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    const user = prisma.user.update({
      where: {
        id
      },
      data
    })

    return user;
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }
}
