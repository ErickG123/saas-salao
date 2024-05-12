import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteUserUseCase } from "../../../use-cases/factories/users/make-delete-user-use-case";
import z from "zod";

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function deleteUserController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteUserUseCase = makeDeleteUserUseCase();

  try {
    await deleteUserUseCase.execute(params);

    return reply.status(200).send({ message: "User deleted." });
  } catch (error) {
    return reply.status(400).send({ message: error });
  }
}
