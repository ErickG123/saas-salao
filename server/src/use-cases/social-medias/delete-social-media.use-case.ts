import { SocialMediasRepository } from "../../repositories/social-medias.repository";

interface DeleteSocialMediaUseCaseRequest {
  id: string
}

export class DeleteSocialMediaUseCase {
  constructor(private socialMediaRepository: SocialMediasRepository) { }

  async execute({ id }: DeleteSocialMediaUseCaseRequest): Promise<void> {
    this.socialMediaRepository.delete(id);
  }
}
