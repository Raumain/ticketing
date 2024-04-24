import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import { useGetProjectById } from "../api/queries";

export const Route = createFileRoute("/projects/$id")({
  component: Project,
});

function Project() {
  const { id } = useParams({ from: "/projects/$id" });
  const { data: project } = useGetProjectById(id);
  if (!project) return <p>Loading...</p>;
  return (
    <>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <h4>Repositories</h4>
      <ul>
        {project.repositories.map((repo) => (
          <li key={repo.id}>
            <Link
              to={`/repositories/${repo.id}`}
              params={{ id: repo.id }}
              className="text-teal-600 hover:underline"
            >
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
