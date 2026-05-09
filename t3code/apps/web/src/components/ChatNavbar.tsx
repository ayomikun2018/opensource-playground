import React from "react";
import { Button } from "@repo/ui/button";
import { PlusIcon } from "lucide-react";

export default function ChatNavbar() {
  return (
    <header className="flex w-full items-center justify-between border-b text-sm px-4 py-4 bg-background shrink-0">
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
  )
}
