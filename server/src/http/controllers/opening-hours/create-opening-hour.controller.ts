import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateOpeningHourUseCase } from "../../../use-cases/factories/opening-hours/make-create-opening-hour-use.case";

const bodySchema = z.object({
  weekDay: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  salonId: z.string()
});

export async function createOpeningHourController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createOpeningHourController = makeCreateOpeningHourUseCase();

  try {
    const { openingHour } = await createOpeningHourController.execute(body);

    return reply.status(201).send(openingHour);
  } catch (error) {
    return reply.status(400).send(error);
  }
}
