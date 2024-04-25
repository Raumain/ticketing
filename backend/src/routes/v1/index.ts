import Elysia from "elysia";
import user from "./user";
import issues from "./issues";
import projects from "./projects";
import repositories from "./repositories";
import github_token from "./github_token";

export const v1 = new Elysia()
  .use(user)
  .use(github_token)
  .use(projects)
  .use(repositories)
  .use(issues)