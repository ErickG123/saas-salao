import { SocialMedia, Prisma } from "@prisma/client";
import { SocialMediasRepository } from "../social-medias.repository";
import { prisma } from "../../lib/prisma";

export class PrismaSocialMediasRepository implements SocialMediasRepository {
  async create(data: Prisma.SocialMediaCreateInput): Promise<SocialMedia> {
    try {
      const socialMedia = await prisma.socialMedia.create({ data });
      return socialMedia;
    } catch (error) {
      console.error("Erro ao criar a rede social:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.socialMedia.delete({
      where: {
        id
      }
    });
  }
}
