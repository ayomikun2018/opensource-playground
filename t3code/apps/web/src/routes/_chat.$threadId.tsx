import { Button } from "@repo/ui/button";
import { Textarea } from "@repo/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, PlusIcon } from "lucide-react";
import { cn } from "@repo/ui/utils";
import ChatView from "../components/ChatView";

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
      <div className="shrink-0  bg-background p-4">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <Textarea
            placeholder="Ask anything, @tag files/folders, or use / to show available commands"
            className={cn(
              "min-h-[120px] max-h-[200px] w-full resize-none rounded-2xl border-blue-400/50 p-4 pr-12 text-sm shadow-lg",
              "focus:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-400",
            )}
          />

          <div className="absolute bottom-3 right-3">
            <Button
              size="icon"
              variant="ghost"
              className="size-8 rounded-full bg-blue-500 text-white"
            >
              <ArrowUp className="size-4 font-bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
