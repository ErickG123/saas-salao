import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateProductUseCase } from "../../../use-cases/factories/make-create-product-use-case";

const bodySchema = z.object({
  name: z.string()
});

export async function createProductController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);

  const createProductUseCase = makeCreateProductUseCase();

  try {
    const { product } = await createProductUseCase.execute(body);

    return reply.status(200).send(product);
  } catch (error) {
    return reply.status(400).send({ message: error });
  }
}
