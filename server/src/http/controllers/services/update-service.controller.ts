import { FastifyReply, FastifyRequest } from "fastify";
import { makeUpdateServiceUseCase } from "../../../use-cases/factories/services/make-update-service-use-case";
import z from "zod";

const bodySchema = z.object({
  name: z.string(),
  description: z.string(),
  minValue: z.number(),
  maxValue: z.number(),
  averageTime: z.number(),
  categoryId: z.string()
});

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function updateServiceController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const params = paramsSchema.parse(request.params);

  const updateServiceUseCase = makeUpdateServiceUseCase();

  try {
    const { service } = await updateServiceUseCase.execute(params, body);

    return reply.status(200).send(service);
  } catch (error) {
    if (error) {
      return reply.status(400).send({ message: error });
    }
  }
}
