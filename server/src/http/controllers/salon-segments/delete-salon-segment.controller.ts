import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteSalonSegmentUseCase } from "../../../use-cases/factories/salon-segments/make-delete-salon-segment-use-case";

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function deleteSalonSegmentController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteSalonSegmentUseCase = makeDeleteSalonSegmentUseCase();

  try {
    await deleteSalonSegmentUseCase.execute(params);

    return reply.status(200).send({ message: "Salon Segment deleted." });
  } catch (error) {
    return reply.status(400).send({ message: error });
  }
}
