import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeUpdateSalonUseCase } from "../../../use-cases/factories/salons/make-update-salon-use-case";

const bodySchema = z.object({
  companyName: z.string(),
  document: z.string(),
  description: z.string(),
  zipcode: z.number(),
  address: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  number: z.number(),
  latitude: z.string(),
  longitude: z.string()
});

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function updateSalonController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const params = paramsSchema.parse(request.params);

  const updateSalonUseCase = makeUpdateSalonUseCase();

  try {
    const { salon } = await updateSalonUseCase.execute(params, body);

    return reply.status(200).send(salon);
  } catch (error) {
    if (error) {
      return reply.status(400).send({ message: error });
    }
  }
}
