import { cn } from "@repo/ui";
import React from "react";
import { ChatTimelineProps, ThreadEntry } from "../types";
import ChatMarkdown from "./ChatMarkdown";
import { timeStampFormat } from "../timestampFormat";

export default function ChatTimeline({ rows }: ChatTimelineProps) {
  function renderRowContent(row: ThreadEntry) {
    return (
      <div>
        {row.kind === "work" &&
          (() => {
            return (
              <div className="py-1">
                <div className="rounded-xl border border-border/45 bg-card/25 px-2 py-1.5">
                  <div className="space-y-0.5">
                    {row.groupedEntries.map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-center gap-4 rounded-lg px-1 py-1 text-[11px]"
                      >
                        <span className="text-muted-foreground/90">
                          {" "}
                          &gt;_{" "}
                        </span>
                        <p className="truncate text-muted-foreground/70">
                          {entry.text} {entry.command}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        {row.kind === "message" &&
          (() => {
            const isUser = row.message.role === "user";
            const isAssistant = row.message.role === "assistant";

            return (
              <div
                className={cn(
                  "py-1 flex",
                  isUser ? "justify-end" : "justify-start",
                  isAssistant && "flex-col",
                )}
              >
                {row.showCompletionDivider && isAssistant && (
                  <div className="my-4 flex w-full items-center">
                    <span className="h-px flex-1 bg-border" />

                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80">
                      Response • worked for{" "}
                      {timeStampFormat(row.durationStart, row.createdAt)}
                    </span>

                    <span className="h-px flex-1 bg-border" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-2xl py-3",
                    isUser
                      ? "max-w-[75%] rounded-br-sm border border-border bg-secondary px-4"
                      : "w-full rounded-bl-sm",
                  )}
                >
                  {isAssistant ? (
                    <ChatMarkdown content={row.message.text} />
                  ) : (
                    <p
                      className={cn(
                        "wrap-break-word whitespace-pre-wrap text-sm leading-relaxed text-foreground",
                        isUser && "font-mono",
                      )}
                    >
                      {row.message.text}
                    </p>
                  )}

                  <p
                    className={cn(
                      "mt-1.5 text-[10px] text-muted-foreground/40",
                      isUser ? "text-right" : "text-left",
                    )}
                  >
                    {timeStampFormat(row.createdAt, row.durationStart, !isUser)}
                  </p>
                </div>
              </div>
            );
          })()}
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1  py-2">
        <div className="mx-auto w-full max-w-3xl">
          {rows.length === 0 && (
            <div className="flex h-40 items-center justify-center">
              <p className="text-sm text-muted-foreground/30">
                Send a message to start
              </p>
            </div>
          )}

          {rows.map((row) => (
            <div key={row.id}>{renderRowContent(row)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
