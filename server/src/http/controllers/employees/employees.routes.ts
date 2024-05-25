import { FastifyInstance } from "fastify";
import { createEmployeeController } from "./create-employee.controller";
import { updateEmployeeController } from "./update-employee.controller";
import { deleteEmployeeController } from "./delete-employee.controller";

export async function employees(app: FastifyInstance) {
    app.addHook("preHandler", async (request) => {
        await request.jwtVerify();
    });

    app.post("/employees", createEmployeeController);
    app.put("/employees/:id", updateEmployeeController);
    app.delete("/employees/:id", deleteEmployeeController);
}
