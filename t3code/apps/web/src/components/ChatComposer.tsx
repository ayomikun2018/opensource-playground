import { Button, cn, Textarea } from "@repo/ui";
import { ArrowUp } from "lucide-react";

export function ChatComposer() {
  return (
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
  );
}
