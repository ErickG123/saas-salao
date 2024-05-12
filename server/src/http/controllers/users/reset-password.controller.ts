import { FastifyReply, FastifyRequest } from "fastify";
import { makeResetPasswordUseCase } from "../../../use-cases/factories/users/make-reset-password-use-case";
import z from "zod";

const bodySchema = z.object({
  email: z.string(),
  password: z.string()
});

const querySchema = z.object({
  resetToken: z.string().uuid()
});

export async function resetPasswordController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const query = querySchema.parse(request.query);

  const resetPasswordUseCase = makeResetPasswordUseCase();

  try {
    const { user } = await resetPasswordUseCase.execute(query, body);

    return reply.status(200).send(user);
  } catch (error) {
    return reply.status(400).send({ message: error });
  }
}
