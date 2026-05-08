import { createFileRoute, Outlet } from "@tanstack/react-router";
import ChatRouteLayout from "../components/ChatRouteLayout";

export const Route = createFileRoute("/_chat")({
  component: ChatRouteLayout,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
