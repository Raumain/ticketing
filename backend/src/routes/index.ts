import Elysia from "elysia";
import { v1 } from "./v1";

export const api = new Elysia().group("/api/v1", (app) => app.use(v1))
