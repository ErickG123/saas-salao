import { FastifyInstance } from "fastify";
import { createSocialMediaController } from "./create-social-media.controller";
import { deleteSocialMediaController } from "./delete-social-media.controller";


export async function socialMediaRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/salon/:salonId/socialMedias", createSocialMediaController);
  app.delete("/salon/:salonId/socialMedias/:id", deleteSocialMediaController);
}
