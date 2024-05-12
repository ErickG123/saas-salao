import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateServiceUseCase } from "../../../use-cases/factories/services/make-create-service-use-case";

const bodySchema = z.object({
  name: z.string(),
  description: z.string(),
  minValue: z.number(),
  maxValue: z.number(),
  averageTime: z.number(),
  categoryId: z.string()
});

export async function createServiceController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createServiceController = makeCreateServiceUseCase();

  try {
    const { service } = await createServiceController.execute(body);

    return reply.status(201).send(service);
  } catch (error) {
    return reply.status(400).send(error);
  }
}
