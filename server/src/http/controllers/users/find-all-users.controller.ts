import { FastifyReply, FastifyRequest } from "fastify";
import { makeFindAllUsersUseCase } from "../../../use-cases/factories/make-find-all-users-use-case";
import { NoUsersFound } from "../../../use-cases/errors/no-users-found";

export async function findAllUsersController(request: FastifyRequest, reply: FastifyReply) {
  const findAllUsersUseCase = makeFindAllUsersUseCase();

  try {
    const { users } = await findAllUsersUseCase.execute();

    return reply.status(200).send({ users });
  } catch (error) {
    if (error instanceof NoUsersFound) {
      return reply.status(400).send({ message: error.message });
    }
  }
}
