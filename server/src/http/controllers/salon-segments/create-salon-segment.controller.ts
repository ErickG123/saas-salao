import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateSalonSegmentUseCase } from "../../../use-cases/factories/salon-segments/make-create-salon-segment-use-case";

const bodySchema = z.object({
  salonId: z.string(),
  segmentId: z.string()
});

export async function createSalonSegmentController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createSalonSegmentUseCase = makeCreateSalonSegmentUseCase();

  try {
    const { salonSegment } = await createSalonSegmentUseCase.execute(body);

    return reply.status(201).send(salonSegment);
  } catch (error) {
    return reply.status(400).send(error);
  }
}
