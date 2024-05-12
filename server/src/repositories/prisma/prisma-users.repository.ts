import { Prisma, User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { UsersRepository } from "../users.repository";
import { UserNotFound } from "../../use-cases/errors/user-not-found.error";
import { randomUUID } from "crypto";
import { sendPasswordEmail } from "../../utils/send-password-email";

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
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
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

  async verifyOtp(email: string, otpCode: string): Promise<User> {
    const user = await prisma.user.update({
      where: {
        email,
        otpCode
      },
      data: {
        isActive: true
      }
    });

    return user;
  }

  async forgotPassword(email: string): Promise<User> {
    const user = await this.findByEmail(email);

    if (!user) throw new UserNotFound();

    const resetToken = randomUUID();
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        resetToken,
        resetTokenExpiry
      }
    });

    const resetUrl = `http://localhost:3000/users/reset-password?resetToken=${resetToken}`;

    await sendPasswordEmail(user.email, resetUrl);

    return user;
  }

  async resetPassword(email: string, password: string, resetToken: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
        resetToken
      }
    });

    if (!user) throw new UserNotFound();

    await prisma.user.update({
      where: {
        email,
        resetToken
      },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    return user;
  }
}
