import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteServiceUseCase } from "../../../use-cases/factories/services/make-delete-service-use-case";

const paramsSchema = z.object({
  id: z.string()
});

export async function deleteServiceController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteServiceUseCase = makeDeleteServiceUseCase();

  try {
    await deleteServiceUseCase.execute(params);

    return reply.status(200).send({ message: "Service deleted." })
  } catch (error) {
    return reply.status(400).send(error);
  }
}
