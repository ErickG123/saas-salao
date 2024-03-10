import { FastifyInstance } from "fastify";
import { createUserController } from "./create-user.controller";
import { authenticateUserController } from "./authenticate-user.controller";
import { updateUserController } from "./update-user.controller";
import { deleteUserController } from "./delete-user.controller";
import { findUserController } from "./find-user.controller";
import { findAllUsersController } from "./find-all-users.controller";

export async function usersRoutes(app: FastifyInstance) {
  app.get("/users", findAllUsersController);
  app.get("/users/:id", findUserController);
  app.post("/users", createUserController);
  app.post("/users/authenticate", authenticateUserController);
  app.put("/users/:id", updateUserController);
  app.delete("/users/:id", deleteUserController);
}
