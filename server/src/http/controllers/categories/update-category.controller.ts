import { FastifyReply, FastifyRequest } from "fastify";
import { makeUpdateCategoryUseCase } from "../../../use-cases/factories/categories/make-update-category-use-case";
import z from "zod";

const bodySchema = z.object({
  name: z.string(),
});

const paramsSchema = z.object({
  id: z.string().uuid()
});

export async function updateCategoryController(request: FastifyRequest, reply: FastifyReply) {
  const body = bodySchema.parse(request.body);
  const params = paramsSchema.parse(request.params);

  const updateCategoryUseCase = makeUpdateCategoryUseCase();

  try {
    const { category } = await updateCategoryUseCase.execute(params, body);

    return reply.status(200).send(category);
  } catch (error) {
    if (error) {
      return reply.status(400).send({ message: error });
    }
  }
}
