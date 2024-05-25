import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeCreateEmployeeUseCase } from "../../../use-cases/factories/employees/make-create-employee-use-case";

const bodySchema = z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
    number: z.number(),
    complement: z.string(),
    district: z.string(),
    zipcode: z.string(),
    city: z.string(),
    state: z.string(),
    salonId: z.string()
});

export async function createEmployeeController(request: FastifyRequest, reply: FastifyReply) {
    const body = bodySchema.parse(request.body);

    const createEmployeeUseCase = makeCreateEmployeeUseCase();

    try {
        const { employee } = await createEmployeeUseCase.execute(body);

        return reply.status(201).send(employee);
    } catch (error) {
        return reply.status(400).send(error);
    }
}
