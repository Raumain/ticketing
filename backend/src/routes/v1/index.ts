import Elysia from "elysia";
import user from "./user";
import issues from "./issues";
import projects from "./projects";
import repositories from "./repositories";

export const v1 = new Elysia()
  .use(user)
  .use(projects)
  .use(repositories)
  .use(issues)