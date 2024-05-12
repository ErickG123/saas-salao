import { FastifyInstance } from "fastify";
import { createServiceController } from "./create-service.controller";
import { updateServiceController } from "./update-service.controller";
import { deleteServiceController } from "./delete-service.controller";

export async function servicesRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salon/:salonId/services", createServiceController);
  app.put("/salon/:salonId/services/:id", updateServiceController);
  app.delete("/salon/:salonId/services/:id", deleteServiceController);
}
