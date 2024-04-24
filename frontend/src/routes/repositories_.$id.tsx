import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import { useGetRepositoryById } from "~/api/queries";

export const Route = createFileRoute("/repositories/$id")({
  component: Repository,
});

function Repository() {
  const { id } = useParams({ from: "/repositories/$id" });
  const { data: repository } = useGetRepositoryById(id);
  if (!repository) return <p>Loading...</p>;

  return (
    <>
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <h4>Issues</h4>
      <ul>
        {repository.issues.map((issue) => (
          <li key={issue.id}>
            <Link
              to={`/issues/${issue.id}`}
              params={{ id: issue.id }}
              className="text-teal-600 hover:underline"
            >
              {issue.name}
            </Link>
          </li>
        ))}
      </ul>
      <h4>From project</h4>
      <Link
        to={`/projects/${repository.project.id}`}
        params={{ id: repository.project.id }}
        className="text-teal-600 hover:underline"
      >
        {repository.project.name}
      </Link> 
    </>
  );
}
