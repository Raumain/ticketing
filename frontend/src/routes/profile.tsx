import { createFileRoute } from "@tanstack/react-router";
// import { usePostApiV1UserGithubToken } from "../api/queries";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  // const { mutate: createToken } = usePostApiV1UserGithubToken()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const github_token = formData.get("github_token") as string;
    // createToken({ github_token });
    console.log("github_token", github_token);
  }
  return (
    <>
      <h3>Hello from Profile !</h3>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit}>
          <input type="text" name="github_token" id="github_token" />
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}
