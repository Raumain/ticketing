import Elysia, { t } from "elysia";
import { db } from "../../db";

const PROJECTS_SCHEMA = t.Object({
  id: t.String(),
  name: t.String(),
  description: t.String(),
  repositories: t.Array(t.String()),
  created_at: t.Date(),
  updated_at: t.Date(),
})
const projects = new Elysia({ prefix: '/projects' })
  .get("/", async () => {
    const projects = await db
      .selectFrom("projects")
      .selectAll()
      .execute()

    return projects
  },
    {
      detail: { operationId: "getAllProjects", tags: ["getAllProjects"] },
      response: t.Array(t.Omit(PROJECTS_SCHEMA, ["repositories"]))
    }
  )
  .get("/:id", async ({ params: { id } }) => {
    const project = await db
      .selectFrom("projects")
      .selectAll()
      .where("projects.id", "=", id)
      .executeTakeFirstOrThrow()
    const repositories = await db
      .selectFrom("repositories")
      .select("name")
      .where("repositories.project_id", "=", id)
      .execute()
    return { ...project, repositories: repositories.map(r => r.name) }
  },
    {
      detail: { operationId: "getProjectById", tags: ["getProjectById"] },
      params: t.Object({ id: t.String() }),
      response: PROJECTS_SCHEMA
    }
  )
  .post("/", ({ body }) =>
    db
      .insertInto("projects")
      .values(body)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "postProject", tags: ["postProject"] },
      type: "application/json",
      body: t.Object({
        name: t.String({ minLength: 1 }),
        description: t.String({ minLength: 1 }),
      }),

      response: t.Object({ id: t.String() })
    }
  )
  .put("/:id", ({ body, params: { id } }) =>
    db
      .updateTable("projects")
      .set(body)
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "putProject", tags: ["putProject"] },
      body: t.Object({
        name: t.Optional(t.String()),
        description: t.Optional(t.String()),
      }),
      params: t.Object({ id: t.String() }),
      response: t.Object({ id: t.String() })
    }
  )
  .delete("/:id", ({ params: { id } }) =>
    db
      .deleteFrom("projects")
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "deleteProject", tags: ["deleteProject"] },
      params: t.Object({ id: t.String() }),
      response: t.Object({ id: t.String() })
    }
  )

export default projects
