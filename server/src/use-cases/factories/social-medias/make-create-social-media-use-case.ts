import { PrismaSocialMediasRepository } from "../../../repositories/prisma/prisma-social-medias.repository";
import { CreateSocialMediaUseCase } from "../../social-medias/create-social-media.use-case";

export function makeCreateSocialMediaUseCase() {
  return new CreateSocialMediaUseCase(new PrismaSocialMediasRepository);
}
