import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Nav from "../components/Nav";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    );

export const Route = createRootRoute({
  component: () => (
    <div className="p-1">
      <Nav />
      <div className="p-4">
        <Outlet />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </div>
    </div>
  ),
});
