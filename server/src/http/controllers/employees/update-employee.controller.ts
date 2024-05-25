import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeUpdateEmployeeUseCase } from "../../../use-cases/factories/employees/make-update-employee-use-case";

const bodySchema = z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
    number: z.number(),
    complement: z.string(),
    district: z.string(),
    zipcode: z.string(),
    city: z.string(),
    state: z.string()
});

const paramsSchema = z.object({
    id: z.string().uuid()
});

export async function updateEmployeeController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);
    const params = paramsSchema.parse(request.params);

    const updateEmployeeUseCase = makeUpdateEmployeeUseCase();

    try {
        const { employee } = await updateEmployeeUseCase.execute(params, body);

        return reply.status(200).send(employee);
    } catch (error) {
        return reply.status(400).send({ message: error });
    }
}
