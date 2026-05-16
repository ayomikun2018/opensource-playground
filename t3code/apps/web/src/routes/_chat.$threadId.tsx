import { createFileRoute } from "@tanstack/react-router";
import ChatView from "../components/ChatView";
import { ChatComposer } from "../components/ChatComposer";

export const Route = createFileRoute("/_chat/$threadId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-hidden">
      <main className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto w-full max-w-3xl">
          <ChatView />
        </div>
      </main>
      <ChatComposer />
    </div>
  );
}
