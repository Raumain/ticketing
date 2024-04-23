import { Link, createFileRoute } from "@tanstack/react-router";
import {
  getAllRepositoriesQueryKey,
  useGetAllProjects,
  useGetAllRepositories,
  usePostRepository,
} from "~/api/queries/hooks";
import { queryClient } from "~/app";

export const Route = createFileRoute("/repositories")({
  component: Repositories,
});

function Repositories() {
  const { data: projects } = useGetAllProjects();
  const { data: repositories } = useGetAllRepositories();
  const { mutate: createRepository } = usePostRepository({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: getAllRepositoriesQueryKey() });
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
    const repository = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      project_id: formData.get("projects") as string,
    };
    console.log(repository);
    createRepository(repository);
  };
  return (
    <>
      <h3>Welcome to Repositories!</h3>
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
        <label htmlFor="projects">
          Projects :
          <select name="projects" id="projects">
            {projects?.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
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

      <h4>Existing repositories</h4>
      {repositories?.map((repository) => (
        <div key={repository.id} className="flex flex-col gap-2">
          <Link to={repository.id} className="text-teal-600 hover:underline">
            {repository.name}
          </Link>
        </div>
      ))}
    </>
  );
}
