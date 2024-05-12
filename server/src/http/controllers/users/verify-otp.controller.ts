import { FastifyReply, FastifyRequest } from "fastify";
import { makeVerifyOtpUseCase } from "../../../use-cases/factories/users/make-verify-otp-use-case";
import z from "zod";

const bodySchema = z.object({
  email: z.string(),
  otpCode: z.string()
});

export async function verifyOtpController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const verifyOtpUseCase = makeVerifyOtpUseCase();

  try {
    const { user } = await verifyOtpUseCase.execute(body);

    return reply.status(200).send(user);
  } catch (error) {
    if (error) {
      return reply.status(400).send({ message: error });
    }
  }
}
