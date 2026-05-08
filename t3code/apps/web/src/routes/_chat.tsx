import { createFileRoute, Outlet } from "@tanstack/react-router";
import ChatNavbar from "../components/ChatNavbar";

export const Route = createFileRoute("/_chat")({
  component: ChatRouteLayout,
});

function ChatRouteLayout() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <ChatNavbar />
      <Outlet />;
    </div>
  );
}
