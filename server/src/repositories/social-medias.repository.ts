import { SocialMedia, Prisma } from "@prisma/client";

export interface SocialMediasRepository {
  create(data: Prisma.SocialMediaCreateInput): Promise<SocialMedia>
  delete(id: string): void
}
