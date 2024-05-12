import { FastifyInstance } from "fastify";
import { createOpeningHourController } from "./create-opening-hour.controller";
import { deleteOpeningHourController } from "./delete-opening-hour.controller";

export async function openingHourRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salon/:salonId/openingHours", createOpeningHourController);
  app.delete("/salon/:salonId/openingHours/:id", deleteOpeningHourController);
}
