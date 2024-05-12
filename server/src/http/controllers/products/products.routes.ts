import { FastifyInstance } from "fastify";
import { createProductController } from "./create-product.controller";

export async function productsRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/products", createProductController);
}
