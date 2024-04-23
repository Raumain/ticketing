import { Link, createFileRoute } from "@tanstack/react-router";
import { getAllProjectsQueryKey, useGetAllProjects, usePostProject } from "../api/queries";
import { queryClient } from "../app";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  const { mutate: createProject } = usePostProject({
    mutation: {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: getAllProjectsQueryKey() });
        console.log(data);
      },
      onError: (error) => {
        console.error(error);
      },
    },
  });

  const { data, isLoading, error } = useGetAllProjects();
  console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget
    const formData = new FormData(form);
    const project = {
      name: formData.get("project") as string,
      description: formData.get("description") as string,
    };
    console.log(project);
    createProject(project)
  };
  return (
    <>
      <h3>Welcome to Projects!</h3>
      <form className="flex flex-col gap-2 w-56" onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col gap-2">
          Name :
          <input type="text" name="project" id="project" className="border border-slate-600 py-1 px-4" />
        </label>
        <label htmlFor="description" className="flex flex-col gap-2">
          Description :
          <input type="text" name="description" id="description" className="border border-slate-600 py-1 px-4" />
        </label>
        <button type="submit" className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1">Save</button>
      </form>
      <h4>Existing projects</h4>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.map((project) => (
        <div key={project.id} className="flex flex-col gap-2">
          <Link to={project.id} className="text-teal-600 hover:underline">{project.name}</Link>
        </div>
      ))}
    </>
  );
}