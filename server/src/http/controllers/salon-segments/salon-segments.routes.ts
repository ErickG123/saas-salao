import { FastifyInstance } from "fastify";
import { createSalonSegmentController } from "./create-salon-segment.controller";
import { deleteSalonSegmentController } from "./delete-salon-segment.controller";

export async function salonSegmentsRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salon/:salonId/segments", createSalonSegmentController);
  app.delete("/salon/:salonId/segments/:id", deleteSalonSegmentController);
}
