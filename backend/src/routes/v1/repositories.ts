import Elysia, { t } from "elysia";
import { db } from "../../db";

const repositories = new Elysia({ prefix: '/repositories' })
  .get("/", () =>
    db
      .selectFrom("repositories")
      .selectAll()
      .execute(),
    {
      detail: { operationId: "getAllRepositories", tags: ["getAllRepositories"] },
      response: t.Array(t.Object({
        id: t.String(),
        name: t.String(),
        description: t.String(),
        project_id: t.String(),
        created_at: t.Date(),
        updated_at: t.Date(),
      }))
    }
  )
  .get("/:id", async ({ params: { id } }) => {
    const repository = await db
      .selectFrom("repositories")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirstOrThrow()
    const project = await db
      .selectFrom("projects")
      .select(["id", "name"])
      .where("id", "=", repository.project_id)
      .executeTakeFirstOrThrow()
    const issues = await db
      .selectFrom("issues")
      .select(["id", "name"])
      .where("repository_id", "=", id)
      .execute()
    return { ...repository, project, issues }
  },
    {
      detail: { operationId: "getRepositoryById", tags: ["getRepositoryById"] },
      params: t.Object({ id: t.String() }),
      response: t.Object({
        id: t.String(),
        name: t.String(),
        description: t.String(),
        project: t.Object({ id: t.String(), name: t.String() }),
        issues: t.Array(t.Object({ id: t.String(), name: t.String() })),
        project_id: t.String(),
        created_at: t.Date(),
        updated_at: t.Date(),
      })
    }
  )
  .post("/", ({ body }) =>
    db
      .insertInto("repositories")
      .values(body)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "postRepository", tags: ["postRepository"] },
      body: t.Object({
        project_id: t.String(),
        name: t.String(),
        description: t.String(),
      }),
      response: t.Object({ id: t.String() })
    }
  )
  .put("/:id", ({ body, params: { id } }) =>
    db
      .updateTable("repositories")
      .set(body)
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "putRepository", tags: ["putRepository"] },
      body: t.Object({
        name: t.Optional(t.String()),
        description: t.Optional(t.String()),
      }),
      response: t.Object({ id: t.String() })
    }
  )
  .delete("/:id", ({ params: { id } }) =>
    db
      .deleteFrom("repositories")
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "deleteRepository", tags: ["deleteRepository"] },
      params: t.Object({ id: t.String() }),
      response: t.Object({ id: t.String() })
    }
  )

export default repositories