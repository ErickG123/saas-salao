import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateSocialMediaUseCase } from "../../../use-cases/factories/social-medias/make-create-social-media-use-case";

const bodySchema = z.object({
  url: z.string(),
  name: z.string(),
  salonId: z.string()
});

export async function createSocialMediaController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createSocialMediaUseCase = makeCreateSocialMediaUseCase();

  try {
    const { socialMedia } = await createSocialMediaUseCase.execute(body);

    return reply.status(201).send(socialMedia);
  } catch (error) {
    return reply.status(400).send(error);
  }
}
