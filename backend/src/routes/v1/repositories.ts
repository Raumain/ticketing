import Elysia, { t } from "elysia";
import { ISSUES_SCHEMA } from "./issues";
import { db } from "../../db";

export const REPOSITORIES_SCHEMA = t.Object({
  id: t.String(),
  name: t.String(),
  description: t.String(),
  project_id: t.String(),
  created_at: t.Date(),
  updated_at: t.Date(),
})

const repositories = new Elysia({ prefix: '/repositories' })
  .get("/", () =>
    db
      .selectFrom("repositories")
      .selectAll()
      .execute(),
    {
      detail: { operationId: "getAllRepositories", tags: ["getAllRepositories"] },
      response: t.Array(REPOSITORIES_SCHEMA)
    }
  )
  .get("/:id", ({ params: { id } }) =>
    db
      .selectFrom("repositories")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "getRepositoryById", tags: ["getRepositoryById"] },
      params: t.Object({ id: t.String() }),
      response: REPOSITORIES_SCHEMA
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