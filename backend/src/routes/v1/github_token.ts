import Elysia, { t } from "elysia";
import { db } from "../../db";
import { isValidToken } from "../../helpers/github_token";

const github_token = new Elysia({ prefix: '/github-token' })
  .post("/", async ({ body: { id, authorization } }) => {
    if (!isValidToken(authorization)) throw new Error("Invalid token");

    const user = await db
      .updateTable("users")
      .set({ github_token: authorization })
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow()

    return user
  },
    {
      detail: { operationId: "postGithubToken", tags: ["postGithubToken"] },
      type: "application/json",
      body: t.Object({
        id: t.String(),
        authorization: t.String(),
      }),
      response: t.Object({
        id: t.String(),
      })
    }
  )

export default github_token
