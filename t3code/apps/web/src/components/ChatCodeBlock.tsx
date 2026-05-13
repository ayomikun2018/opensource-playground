"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function ChatCodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-border bg-[#2c2b2b] opc">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <p className="text-xs font-medium lowercase text-muted-foreground">
          {language}
        </p>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white transition "
          title={copied ? "Copied" : "Copy code"}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
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

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "13px",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
