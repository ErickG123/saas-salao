import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteSocialMediaUseCase } from "../../../use-cases/factories/social-medias/make-delete-social-media-use-case";

const paramsSchema = z.object({
  id: z.string()
});

export async function deleteSocialMediaController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteSocialMediaUseCase = makeDeleteSocialMediaUseCase();

  try {
    await deleteSocialMediaUseCase.execute(params);

    return reply.status(200).send({ message: "Social Media deleted." })
  } catch (error) {
    return reply.status(400).send(error);
  }
}
