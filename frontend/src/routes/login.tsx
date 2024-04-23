import { createFileRoute } from "@tanstack/react-router";
import { usePostApiV1User } from "../api/queries";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { mutate: createUser } = usePostApiV1User({
    mutation: {
      onSuccess: (data) => {
        console.log("data", data);
      },
    },
  });
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    createUser({ email, password });
    console.log("email", email);
    console.log("password", password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" className="border border-slate-800" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" className="border border-slate-800" />
      <button type="submit" className="bg-slate-500 px-3 py-1 rounded">
        Login
      </button>
    </form>
  );
}
