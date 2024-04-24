import Elysia, { t } from "elysia";
import { db } from "../../db";

const issues = new Elysia({ prefix: '/issues' })
  .get("/", () =>
    db
      .selectFrom("issues")
      .selectAll()
      .execute(),
    {
      detail: { operationId: "getAllIssues", tags: ["getAllIssues"] },
      response: t.Array(
        t.Object({
          id: t.String(),
          repository_id: t.String(),
          name: t.String(),
          description: t.String(),
          created_at: t.Date(),
          updated_at: t.Date(),
        })
      )
    }
  )
  .get("/:id", ({ params: { id } }) => db
    .selectFrom("issues")
    .innerJoin("repositories", "issues.repository_id", "repositories.id")
    .select([
      "issues.id",
      "issues.repository_id",
      "issues.name",
      "issues.description",
      "issues.created_at",
      "issues.updated_at",
      "repositories.name as repository_name"
    ])
    .where("issues.id", "=", id)
    .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "getIssueById", tags: ["getIssueById"] },
      params: t.Object({ id: t.String() }),
      response: t.Object({
        id: t.String(),
        repository_id: t.String(),
        name: t.String(),
        description: t.String(),
        repository_name: t.String(),
        created_at: t.Date(),
        updated_at: t.Date(),
      })
    }
  )
  .post("/", ({ body }) =>
    db
      .insertInto("issues")
      .values(body)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "postIssue", tags: ["postIssue"] },
      body: t.Object({
        repository_id: t.String(),
        name: t.String(),
        description: t.String(),
      }),
      response: t.Object({ id: t.String() })
    }
  )
  .put("/:id", ({ body, params: { id } }) =>
    db
      .updateTable("issues")
      .set(body)
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "putIssue", tags: ["putIssue"] },
      body: t.Object({
        repository_id: t.Optional(t.String()),
        name: t.Optional(t.String()),
        description: t.Optional(t.String()),
      }),
      response: t.Object({ id: t.String() })
    }
  )
  .delete("/:id", ({ params: { id } }) =>
    db
      .deleteFrom("issues")
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      detail: { operationId: "deleteIssue", tags: ["deleteIssue"] },
      params: t.Object({ id: t.String() }),
      response: t.Object({ id: t.String() })
    }
  )

export default issues