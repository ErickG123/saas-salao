import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateSalonUseCase } from "../../../use-cases/factories/salons/make-create-salon-use-case";

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
  longitude: z.string(),
  userIds: z.array(z.string())
});

export async function createSalonController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const { userIds, ...salonData } = body;

  const createSalonUseCase = makeCreateSalonUseCase();

  try {
    const { salon } = await createSalonUseCase.execute(salonData, userIds);

    return reply.status(201).send(salon);
  } catch (error) {
    return reply.status(400).send(error);
  }
}
