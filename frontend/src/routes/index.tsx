import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h3>Welcome Home!</h3>
      <div className="flex flex-col gap-2">
        <Link to="/projects" className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1">Project</Link>
        <Link to="/repositories" className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1">Repository</Link>
        <Link to="/issues" className="border border-slate-600 w-28 text-center bg-slate-300 rounded p-4 py-1">Issue</Link>
      </div>
    </>
  );
}
