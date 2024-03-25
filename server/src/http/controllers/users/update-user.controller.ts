import { FastifyReply, FastifyRequest } from "fastify";
import { makeUpdateUserUseCase } from "../../../use-cases/factories/make-update-user-use-case";
import z from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string()
});

const paramsSchema = z.object({
  id: z.string().uuid()
})

export async function updateUserController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const params = paramsSchema.parse(request.params);

  const updateUserUseCase = makeUpdateUserUseCase();

  try {
    const { user } = await updateUserUseCase.execute(params, body);

    return reply.status(200).send(user);
  } catch (error) {
    if (error) {
      return reply.status(400).send({ message: error });
    }
  }
}
