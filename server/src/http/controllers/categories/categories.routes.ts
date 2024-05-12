import { FastifyInstance } from "fastify";
import { createCategoryController } from "./create-category.controller";
import { updateCategoryController } from "./update-category.controller";
import { deleteCategoryController } from "./delete-category.controller";

export async function categoriesRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salon/:salonId/categories", createCategoryController);
  app.put("/salon/:salonId/categories/:id", updateCategoryController);
  app.delete("/salon/:salonId/categories/:id", deleteCategoryController);
}
