import { env } from "./env";
import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { usersRoutes } from "./http/controllers/users/users.routes";
import { salonsRoutes } from "./http/controllers/salons/salons.routes";
import { servicesRoutes } from "./http/controllers/services/services.routes";
import { productsRoutes } from "./http/controllers/products/products.routes";
import { categoriesRoutes } from "./http/controllers/categories/categories.routes";
import { socialMediaRoutes } from "./http/controllers/social-medias/social-medias.routes";
import { openingHourRoutes } from "./http/controllers/opening-hours/opening-hours.routes";
import { salonSegmentsRoutes } from "./http/controllers/salon-segments/salon-segments.routes";

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
app.register(salonsRoutes);
app.register(productsRoutes);
app.register(salonSegmentsRoutes);
app.register(openingHourRoutes);
app.register(socialMediaRoutes);
app.register(categoriesRoutes);
app.register(servicesRoutes);
