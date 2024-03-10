import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateUserUseCase } from "../../../use-cases/factories/make-create-user-use-case";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists.error";
import z from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.number()
});

export async function createUserController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createUserUseCase = makeCreateUserUseCase();

  try {
    const { user } = await createUserUseCase.execute(body);

    return reply.status(201).send(user);
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(400).send({ message: error.message })
    }
  }
}
