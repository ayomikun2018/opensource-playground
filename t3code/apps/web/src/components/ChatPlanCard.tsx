import React from "react";
import ChatMarkdown from "./ChatMarkdown";
import { Badge } from "@repo/ui/badge";
import { CheckIcon, CopyIcon } from "lucide-react";
import { demoPlanMarkdown } from "../mocks/chatData";
import { Button, cn } from "@repo/ui";

function proposedPlanTitle(planMarkdown: string): string | null {
  const heading = planMarkdown.match(/^\s{0,3}#{1,6}\s+(.+)$/m)?.[1]?.trim();
  return heading && heading.length > 0 ? heading : null;
}
function stripDisplayedPlanMarkdown(planMarkdown: string) {
  return planMarkdown.replace(/^\s{0,3}#{1,6}\s+.+\n?/, "").trim();
}

const title = proposedPlanTitle(demoPlanMarkdown) || "Proposed Plan";
export default function ChatPlanCard({
  planMarkdown,
}: {
  planMarkdown: string;
}) {
  const [copiedPlan, setCopiedPlan] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const displayedPlanMarkdown = stripDisplayedPlanMarkdown(planMarkdown);
  async function handleCopyPlan() {
    try {
      await navigator.clipboard.writeText(displayedPlanMarkdown);
      setCopiedPlan(true);
      setTimeout(() => {
        setCopiedPlan(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }
  const lineCount = displayedPlanMarkdown.split("\n").length;
  const canCollapse = lineCount > 10;
  return (
    <div className="rounded-[24px] border border-border/80 bg-card/70 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 ">
          <Badge variant={"secondary"}>Plan</Badge>
          <p className="truncate text-base font-bold text-foreground">
            {title}
          </p>
        </div>
        <button
          onClick={handleCopyPlan}
          className="flex items-center gap-1.5 text-xs text-black transition border-secondary p-2 "
          title={copiedPlan ? "Copied" : "Copy code"}
          aria-label={copiedPlan ? "Copied" : "Copy code"}
        >
          {copiedPlan ? (
            <>
              <CheckIcon className="size-3" />
            </>
          ) : (
            <>
              <CopyIcon className="size-3" />
            </>
          )}
        </button>
      </div>
      <div className="mt-4">
        <div
          className={cn(
            "relative overflow-hidden",
            canCollapse && !expanded && "max-h-[700px]",
          )}
        >
          <ChatMarkdown content={displayedPlanMarkdown} />

          {canCollapse && !expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
          )}
        </div>

        {canCollapse && (
          <div className="mt-4 flex justify-center">
         <Button
              size="sm"
              variant="outline"
              data-scroll-anchor-ignore
              onClick={() => setExpanded((prev) => !prev)}
              className="text-sm font-medium text-primary"
            >
              {expanded ? "Collapse plan" : "Expand plan"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
