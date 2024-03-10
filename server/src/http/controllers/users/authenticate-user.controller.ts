import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeAuthenticateUserUseCase } from "../../../use-cases/factories/authenticate-user-use-case";
import { InvalidCredentialsError } from "../../../use-cases/errors/invalid-credentials-error";

const bodySchema = z.object({
  email: z.string(),
  password: z.string()
});

export async function authenticateUserController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const authenticateUserUseCase = makeAuthenticateUserUseCase();

  try {
    const { user } = await authenticateUserUseCase.execute(body);

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id
        }
      }
    );

    return reply.status(200).send({ token });
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message });
    }
  }
}
