import { FastifyReply, FastifyRequest } from "fastify";
import { makeFindAllSalonsUseCase } from "../../../use-cases/factories/salons/make-find-all-salons-use-case";

export async function findAllSalonsController(request: FastifyRequest, reply: FastifyReply) {
  const findAllSalonsUseCase = makeFindAllSalonsUseCase();

  try {
    const { salons } = await findAllSalonsUseCase.execute();

    return reply.status(200).send({ salons });
  } catch (error) {
    return reply.status(400).send(error);
  }
}
