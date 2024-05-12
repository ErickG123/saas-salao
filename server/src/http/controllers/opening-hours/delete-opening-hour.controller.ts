import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteOpeningHourUseCase } from "../../../use-cases/factories/opening-hours/make-delete-opening-hour-use.case";

const paramsSchema = z.object({
  id: z.string()
});

export async function deleteOpeningHourController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteOpeningHourUseCase = makeDeleteOpeningHourUseCase();

  try {
    await deleteOpeningHourUseCase.execute(params);

    return reply.status(200).send({ message: "Opening Hour deleted." })
  } catch (error) {
    return reply.status(400).send(error);
  }
}
