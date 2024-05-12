import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteCategoryUseCase } from "../../../use-cases/factories/categories/make-delete-category-use-case";

const paramsSchema = z.object({
  id: z.string()
});

export async function deleteCategoryController(request: FastifyRequest, reply: FastifyReply) {
  const params = paramsSchema.parse(request.params);

  const deleteCategoryUseCase = makeDeleteCategoryUseCase();

  try {
    await deleteCategoryUseCase.execute(params);

    return reply.status(200).send({ message: "Category deleted." })
  } catch (error) {
    return reply.status(400).send(error);
  }
}
