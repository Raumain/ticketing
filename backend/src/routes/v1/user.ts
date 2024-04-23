import { Elysia, t } from "elysia";
import { db } from "../../db";
import { isValidPassword } from "../../helpers/password";
const user = new Elysia()
  .get(
    "/user/:id", ({ params: { id } }) =>
    db
      .selectFrom("users")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirstOrThrow(),
    {
      tags: ["getUserById"],
      params: t.Object({
        id: t.String(),
      }),
      response: t.Object({
        id: t.String(),
        github_token: t.Nullable(t.String()),
        created_at: t.Date(),
        updated_at: t.Date(),
      }),
    }
  )
  .post("/user", async ({ body: { email, password } }) => {
    if (!isValidPassword(password)) throw new Error("Invalid password")
    const encryptedPassword = await Bun.password.hash(password)
    const userId = await db
      .insertInto("users")
      .values({ email, password: encryptedPassword })
      .returning("id")
      .executeTakeFirstOrThrow()
    return userId
  },
    {
      type: "application/json",
      tags: ["postUser"],
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
      response: t.Object({ id: t.String() }),
    }
  )
  .post("/user/github_token", ({ body: { id, github_token } }) =>
    db
      .updateTable("users")
      .set("github_token", github_token)
      .where("id", "=", id)
      .returning("id")
      .executeTakeFirstOrThrow(),
    {
      type: "application/json",
      tags: ["postUserGithubToken"],
      body: t.Object({
        id: t.String(),
        github_token: t.String(),
      }),
      response: t.Object({ id: t.String() })
    });

export default user;
