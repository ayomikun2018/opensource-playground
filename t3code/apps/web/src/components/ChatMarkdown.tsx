"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { memo } from "react";
import ChatCodeBlock from "./ChatCodeBlock";

interface ChatMarkdownProps {
  content: string;
}

function ChatMarkdown({ content }: ChatMarkdownProps) {
  return (
    <div className="min-w-0 text-sm leading-7 text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-4 mt-6 text-3xl font-semibold tracking-tight">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-5 text-xl font-semibold">{children}</h3>
          ),

          p: ({ children }) => (
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-foreground/90">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="ml-6 list-disc space-y-2">{children}</ul>
          ),

          ol: ({ children }) => (
            <ol className="ml-6 list-decimal space-y-2">{children}</ol>
          ),

          li: ({ children }) => (
            <li className="text-[15px] leading-7 text-foreground/90">
              {children}
            </li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-2 border-border pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),

          hr: () => <div className="my-6 h-px w-full bg-border" />,

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-400 underline underline-offset-4 hover:text-blue-300"
            >
              {children}
            </a>
          ),

          code(props) {
            const { children, className } = props;

            const match = /language-(\w+)/.exec(className || "");

            const code = String(children).replace(/\n$/, "");

            if (match) {
              return <ChatCodeBlock language={match[1] ?? "txt"} code={code} />;
            }

            return (
              <code className="rounded-md border border-border bg-secondary px-1.5 py-1 font-mono text-[13px]">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
export default memo(ChatMarkdown);
