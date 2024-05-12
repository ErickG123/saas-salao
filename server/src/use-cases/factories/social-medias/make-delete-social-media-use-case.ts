import { PrismaSocialMediasRepository } from "../../../repositories/prisma/prisma-social-medias.repository";
import { DeleteSocialMediaUseCase } from "../../social-medias/delete-social-media.use-case";

export function makeDeleteSocialMediaUseCase() {
  return new DeleteSocialMediaUseCase(new PrismaSocialMediasRepository);
}
