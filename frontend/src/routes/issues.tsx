import { Link, createFileRoute } from "@tanstack/react-router";
import { useGetAllRepositories, useGetAllIssues, usePostIssue, getAllIssuesQueryKey } from "~/api/queries";
import { queryClient } from "~/app";

export const Route = createFileRoute("/issues")({
  component: Issues,
});

function Issues() {
  const { data: repositories } = useGetAllRepositories();
  const { data: issues } = useGetAllIssues();
  const { mutate: createIssue } = usePostIssue({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: getAllIssuesQueryKey() });
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const issue = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      repository_id: formData.get("repository") as string,
    };
    console.log(issue);
    createIssue(issue);
  };

  return (
    <>
      <h3>Welcome to Issues!</h3>

      <form className="flex flex-col gap-2 w-56" onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col gap-2">
          Name:
          <input type="text" name="name" id="name" className="border border-slate-600 py-1 px-4" />
        </label>
        <label htmlFor="description" className="flex flex-col gap-2">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            className="border border-slate-600 py-1 px-4"
          />
        </label>
        <label htmlFor="repository">
          Repository :
          <select name="repository" id="repository">
            {repositories?.map((repository) => (
              <option key={repository.id} value={repository.id}>
                {repository.name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1"
        >
          Save
        </button>
      </form>

      <h4>Existing issues</h4>
      {issues?.map((issue) => (
        <div key={issue.id} className="flex flex-col gap-2">
          <Link to={issue.id} className="text-teal-600 hover:underline">
            {issue.name}
          </Link>
        </div>
      ))}
    </>
  );
}
