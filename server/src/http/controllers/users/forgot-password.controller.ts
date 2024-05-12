import { FastifyReply, FastifyRequest } from "fastify";
import { makeForgotPasswordUseCase } from "../../../use-cases/factories/users/make-forgot-password-use-case";
import { sendPasswordEmail } from "../../../utils/send-password-email";
import z from "zod";

const bodySchema = z.object({
  email: z.string()
});

export async function forgotPasswordController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const forgotPassowrdUseCase = makeForgotPasswordUseCase();

  try {
    const { user } = await forgotPassowrdUseCase.execute(body);

    return reply.status(200).send(user);
  } catch (error) {
    return reply.status(400).send({ message: error });
  }
}
