import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeDeleteEmployeeUseCase } from "../../../use-cases/factories/employees/make-delete-employee-use-case";

const paramsSchema = z.object({
    id: z.string()
});

export async function deleteEmployeeController(request: FastifyRequest, reply: FastifyReply) {
    const params = paramsSchema.parse(request.params);

    const deleteEmployeeUseCase = makeDeleteEmployeeUseCase();

    try {
        await deleteEmployeeUseCase.execute(params);

        return reply.status(200).send({ message: "Employee deleted." })
    } catch (error) {
        return reply.status(400).send(error);
    }
}
