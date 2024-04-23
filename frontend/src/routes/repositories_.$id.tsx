import { createFileRoute, useParams } from "@tanstack/react-router";
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
    </>
  );
}
