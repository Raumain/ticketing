import { createFileRoute } from "@tanstack/react-router";
import { usePostGithubToken } from "~/api/queries";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  const { mutate: createToken } = usePostGithubToken();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const github_token = formData.get("github_token") as string;
    createToken({ id: "df20252d-ee59-43c0-9a87-bfd2fa794b87", authorization: github_token });
  }
  return (
    <>
      <h3>Hello from Profile !</h3>
      <div className="flex gap-2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="github_token" className="flex flex-col gap-2">
            Github token :
            <input
              type="text"
              name="github_token"
              id="github_token"
              className="border border-slate-600 py-1 px-4"
            />
          </label>
          <button
            type="submit"
            className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
