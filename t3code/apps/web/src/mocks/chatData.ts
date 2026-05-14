import { ThreadEntries } from "../types";

const BASE = Date.parse("2026-05-09T12:00:00.000Z");

const at = (seconds: number) => new Date(BASE + seconds * 1000).toISOString();

export const MOCK_THREAD_ENTRIES: ThreadEntries = [
  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(1),
    durationStart: at(1),
    message: {
      id: crypto.randomUUID(),
      role: "user",
      text: "Create a modern React analytics dashboard with Tailwind, markdown rendering, AI chat support, and responsive composer behavior.",
      createdAt: at(1),
    },
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(3),
    durationStart: at(1),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# AI Dashboard Setup

Scaffolding the application and configuring the chat architecture.

## Stack

- React 19
- TypeScript
- Tailwind CSS v4
- TanStack Router
- shadcn/ui
- React Markdown
- Zustand

\`\`\`bash
pnpm create vite ai-dashboard
cd ai-dashboard
pnpm install
\`\`\`

> Initializing workspace...
`,
      createdAt: at(3),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(5),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Scaffolding Vite project",
        status: "completed",
        createdAt: at(5),
      },
      {
        id: crypto.randomUUID(),
        text: "Installing dependencies",
        status: "completed",
        createdAt: at(6),
      },
      {
        id: crypto.randomUUID(),
        text: "Configuring TailwindCSS",
        status: "completed",
        createdAt: at(7),
      },
      {
        id: crypto.randomUUID(),
        text: "Installing markdown tooling",
        status: "running",
        createdAt: at(8),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(10),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command: "pnpm add react-markdown remark-gfm",
        createdAt: at(10),
      },
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command: "pnpm add react-syntax-highlighter lucide-react framer-motion",
        createdAt: at(11),
      },
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command: "pnpm add zustand clsx tailwind-merge",
        createdAt: at(12),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(14),
    durationStart: at(3),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Chat Renderer Initialized

The markdown renderer and syntax highlighter are now configured.

## Features

- Markdown support
- Syntax highlighting
- Copy-to-clipboard
- Inline code styling
- GitHub Flavored Markdown
- Animated code blocks

---

## Example

\`\`\`tsx
function DashboardPage() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <DashboardContent />
    </main>
  );
}
\`\`\`

Inline example: \`const darkMode = true\`
`,
      createdAt: at(14),
    },
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(20),
    durationStart: at(20),
    message: {
      id: crypto.randomUUID(),
      role: "user",
      text: "Fix the completion divider width issue in assistant messages.",
      createdAt: at(20),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(22),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "apps/web/src/components/chat/ChatTimeline.tsx",
        createdAt: at(22),
      },
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "apps/web/src/components/chat/ChatMessageRow.tsx",
        createdAt: at(23),
      },
      {
        id: crypto.randomUUID(),
        text: "Apply patch",
        command:
          "Moved completion divider outside constrained message container",
        createdAt: at(25),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(28),
    durationStart: at(20),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Timeline Divider Fix

The divider was rendering inside a constrained width wrapper.

---

## Root Cause

\`\`\`tsx
<div className="max-w-[75%]">
\`\`\`

The divider inherited the constrained width from the assistant bubble container.

---

## Updated Structure

\`\`\`tsx
<div className="flex flex-col">
  {showCompletionDivider && (
    <div className="my-4 flex w-full items-center">
      <span className="h-px flex-1 bg-border" />

      <span className="px-2 text-xs text-muted-foreground">
        Response complete
      </span>

      <span className="h-px flex-1 bg-border" />
    </div>
  )}

  <div className="max-w-[75%]">
    <ChatMarkdown content={message.text} />
  </div>
</div>
\`\`\`

---

## Result

- Divider now spans full width
- Assistant bubble remains constrained
- Layout matches T3 Code behavior
`,
      createdAt: at(28),
    },
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(35),
    durationStart: at(35),
    message: {
      id: crypto.randomUUID(),
      role: "user",
      text: "Now fix markdown code blocks breaking escaped newline strings.",
      createdAt: at(35),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(37),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "src/components/chat/ChatMarkdown.tsx",
        createdAt: at(37),
      },
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "src/components/chat/ChatCodeBlock.tsx",
        createdAt: at(38),
      },
      {
        id: crypto.randomUUID(),
        text: "Patched markdown renderer",
        status: "completed",
        createdAt: at(40),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(44),
    durationStart: at(35),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Escaped Newline Fix

The markdown renderer was interpreting escaped newlines as actual markdown formatting.

---

## Fixed Example

\`\`\`ts
const proposedPlans = [
  {
    id: "plan-1",
    turnId: "turn-4",
    planMarkdown:
      "# Composer stabilization plan\\\\n\\\\n- Unify footer width calculation\\\\n- Extract compact action layout rules\\\\n- Add browser coverage for narrow widths",
    implementedAt: null,
    implementationThreadId: null,
  },
];
\`\`\`

---

## Renderer Fix

\`\`\`tsx
<ChatCodeBlock
  language="ts"
  code={text}
/>
\`\`\`

---

## Result

- Escaped newlines remain literal
- Copy/paste no longer breaks code
- Markdown formatting is preserved correctly
`,
      createdAt: at(44),
    },
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(50),
    durationStart: at(50),
    message: {
      id: crypto.randomUUID(),
      role: "user",
      text: "Refactor the composer footer layout to support compact mobile actions.",
      createdAt: at(50),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(52),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "src/components/chat/ComposerFooter.tsx",
        createdAt: at(52),
      },
      {
        id: crypto.randomUUID(),
        text: "Read file",
        command: "src/components/chat/ComposerPrimaryActions.tsx",
        createdAt: at(53),
      },
      {
        id: crypto.randomUUID(),
        text: "Extract compact layout utility",
        status: "completed",
        createdAt: at(55),
      },
      {
        id: crypto.randomUUID(),
        text: "Updated responsive action alignment",
        status: "completed",
        createdAt: at(56),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(60),
    durationStart: at(50),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Composer Footer Refactor

The footer layout logic has been extracted into a reusable resolver.

---

## Updated Layout Logic

\`\`\`tsx
type ComposerMode = "default" | "plan";

interface ComposerState {
  mode: ComposerMode;
  isCompact: boolean;
}

function resolveComposerLayout(state: ComposerState) {
  if (state.mode === "plan") {
    return {
      gap: "gap-2",
      justify: "justify-between",
    };
  }

  return {
    gap: state.isCompact ? "gap-1" : "gap-3",
    justify: "justify-end",
  };
}

export function ComposerFooter({
  mode,
  isCompact,
}: ComposerState) {
  const layout = resolveComposerLayout({
    mode,
    isCompact,
  });

  return (
    <footer
      className={cn(
        "flex items-center border-t border-border px-3 py-2",
        layout.gap,
        layout.justify,
      )}
    >
      <button className="rounded-lg border px-3 py-1">
        Cancel
      </button>

      <button className="rounded-lg bg-primary px-3 py-1 text-primary-foreground">
        Continue
      </button>
    </footer>
  );
}
\`\`\`

---

## Improvements

- Shared compact width calculation
- Stable mobile button alignment
- Better plan mode consistency
- Reduced layout shift
`,
      createdAt: at(60),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: at(65),
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Running lint",
        status: "completed",
        createdAt: at(65),
      },
      {
        id: crypto.randomUUID(),
        text: "Running typecheck",
        status: "completed",
        createdAt: at(66),
      },
      {
        id: crypto.randomUUID(),
        text: "Running production build",
        status: "running",
        createdAt: at(67),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: at(72),
    durationStart: at(65),
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Build Successful

The application compiled successfully.

## Build Summary

- Typecheck passed
- Lint passed
- Production bundle optimized
- Markdown rendering stabilized
- Composer layout fixed

---

## Performance

| Metric | Result |
| --- | --- |
| Lighthouse | 98 |
| First Load JS | 121kb |
| Build Time | 14s |

---

## Commands Executed

\`\`\`bash
pnpm lint
pnpm typecheck
pnpm build
\`\`\`

Visit [Vercel](https://vercel.com)
`,
      createdAt: at(72),
    },
    showCompletionDivider: true,
  },
];
