import { SocialMedia } from "@prisma/client";
import { SocialMediasRepository } from "../../repositories/social-medias.repository";

interface CreateSocialMediaUseCaseRequest {
  url: string
  name: string
  salonId: string
}

interface CreateSocialMediaUseCaseResponse {
  socialMedia: SocialMedia
}

export class CreateSocialMediaUseCase {
  constructor(private socialMediasRepository: SocialMediasRepository) { }

  async execute({
    url,
    name,
    salonId
  }: CreateSocialMediaUseCaseRequest,): Promise<CreateSocialMediaUseCaseResponse> {
    const socialMedia = await this.socialMediasRepository.create({
      url,
      name,
      salon: { connect: { id: salonId } }
    });

    return { socialMedia };
  }
}
