import { FastifyReply, FastifyRequest } from "fastify";
import { makeFindSalonUseCase } from "../../../use-cases/factories/salons/make-find-salon-use-case";
import { SalonNotFound } from "../../../use-cases/errors/salon-not-found.error";
import z from "zod";

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function findSalonController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const findSalonUseCase = makeFindSalonUseCase();

  try {
    const { salon } = await findSalonUseCase.execute(params);

    return reply.status(200).send(salon);
  } catch (error) {
    if (error instanceof SalonNotFound) {
      return reply.status(400).send({ message: error.message });
    }
  }
}
