import { Button } from "@repo/ui/components/ui/button";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, PlusIcon } from "lucide-react";
import { cn } from "../../../../packages/ui/src/lib/utils";

export const Route = createFileRoute("/_chat/")({
  component: ChatIndexRouteView,
});

function ChatIndexRouteView() {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden">
      <header className="flex w-full items-center justify-between border-b text-sm px-4 py-2 bg-background shrink-0">
        <div className="flex items-center gap-2">
          <p className="font-medium">New thread</p>
          <p className="px-1.5 py-0.5 text-muted-foreground text-[10px] border rounded-sm bg-muted/50">
            Fintech app
          </p>
        </div>
        <Button size="xs" variant="outline" className="gap-1">
          <PlusIcon className="size-3.5" />
          <span>Add action</span>
        </Button>
      </header>

      <main className="flex-1 overflow-y-auto p-4"></main>

      <div className="w-full p-4 shrink-0 bg-gradient-to-t from-background via-background to-transparent">
        <div className="max-w-3xl mx-auto relative flex flex-col items-center">
          <Textarea
            placeholder="Ask anything, @tag files/folders, or use / to show available commands"
            className={cn(
              "w-full min-h-[120px] max-h-[200px] p-4 pr-12",
              "border-blue-400/50 shadow-lg focus:border-blue-500",
              "text-sm resize-none rounded-2xl ring-0 focus-visible:ring-1 focus-visible:ring-blue-400",
            )}
          />

          <div className="absolute right-3 bottom-3">
            <Button
              size="icon"
              variant="ghost"
              className="size-8 rounded-full text-white bg-blue-500"
            >
              <ArrowUp className="size-4  font-bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
