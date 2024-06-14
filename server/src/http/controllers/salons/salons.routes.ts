import { FastifyInstance } from "fastify";
import { createSalonController } from "./create-salon.controller";
import { updateSalonController } from "./update-salon.controller";
import { findAllSalonsController } from "./find-all-salons.controller";
import { findSalonController } from "./find-salon.controller";

export async function salonsRoutes(app: FastifyInstance) {
  app.post("/salons", createSalonController);
  app.put("/salons/:id", updateSalonController);
  app.get("/salons", findAllSalonsController);
  app.get("/salons/:id", findSalonController);
}
