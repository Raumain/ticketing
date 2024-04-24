import { Link, createFileRoute, useParams } from "@tanstack/react-router";
import { useGetIssueById } from "~/api/queries";

export const Route = createFileRoute("/issues/$id")({
  component: Issue,
});

function Issue() {
  const { id } = useParams({ from: "/issues/$id" });
  const { data: issue } = useGetIssueById(id);
  if (!issue) return <p>Loading...</p>;

  return (
    <>
      <h3>{issue.name}</h3>
      <p>{issue.description}</p>
      <h4>Repository</h4>
      <Link
        to={`/repositories/${issue.repository_id}`}
        params={{ id: issue.repository_id }}
        className="text-teal-600 hover:underline"
      >
        {issue.repository_name}
      </Link>
    </>
  );
}
