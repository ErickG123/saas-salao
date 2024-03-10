import fastify from "fastify";
import { usersRoutes } from "./http/controllers/users/users.routes";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";
import { env } from "./env";
import fastifyCookie from "@fastify/cookie";
import { productsRoutes } from "./http/controllers/products/products.routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: "7d"
  }
});

app.register(fastifyCookie);

app.register(cors, {
  origin: true
});

app.register(usersRoutes);
app.register(productsRoutes);
