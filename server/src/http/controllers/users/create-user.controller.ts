import { FastifyReply, FastifyRequest } from "fastify";
import { makeCreateUserUseCase } from "../../../use-cases/factories/make-create-user-use-case";
import { UserAlreadyExistsError } from "../../../use-cases/errors/user-already-exists.error";
import { sendActivationEmail } from "../../../utils/send-otp-email";
import { generateOTP } from "../../../utils/generate-otp";
import z from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.number(),
  isActive: z.boolean().default(false),
  otpCode: z.string()
});

export async function createUserController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  body.otpCode = generateOTP();

  const createUserUseCase = makeCreateUserUseCase();

  try {
    const { user } = await createUserUseCase.execute(body);

    await sendActivationEmail(user.email, user.otpCode);

    return reply.status(201).send(user);
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(400).send({ message: error.message })
    }
  }
}
