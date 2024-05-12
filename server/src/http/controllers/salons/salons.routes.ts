import { FastifyInstance } from "fastify";
import { createSalonController } from "./create-salon.controller";
import { updateSalonController } from "./update-salon.controller";

export async function salonsRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salons", createSalonController);
  app.put("/salons/:id", updateSalonController);
}
