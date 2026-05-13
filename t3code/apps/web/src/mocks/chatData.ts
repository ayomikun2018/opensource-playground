import { ThreadEntries } from "../types";

export const MOCK_THREAD_ENTRIES: ThreadEntries = [
  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:01:27.631Z",
    durationStart: "2026-04-23T11:01:27.631Z",
    message: {
      id: crypto.randomUUID(),
      role: "user",
      text: "Create a new React dashboard project",
      createdAt: new Date().toISOString(),
    },
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:01:51.274Z",
    durationStart: "2026-04-23T11:01:27.631Z",
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Sure, generating the project structure now.",
      createdAt: new Date().toISOString(),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:01:51.409Z",
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Scaffolding project",
        status: "completed",
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        text: "Installing dependencies",
        status: "running",
        createdAt: new Date().toISOString(),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:02:05.694Z",
    durationStart: "2026-04-23T11:01:51.274Z",
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Dependencies installed successfully.",
      createdAt: new Date().toISOString(),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:02:05.779Z",
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command:
          "rg --files --glob node_modules glob !dist ---glob !build --globe-coverage ",
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command:
          "rg some---files --glob node_modules glob !dist ---glob !build --globe-coverage ",
        createdAt: new Date().toISOString(),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:02:14.322Z",
    durationStart: "2026-04-23T11:02:05.694Z",
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Project setup is almost complete.",
      createdAt: new Date().toISOString(),
    },
    showCompletionDivider: false,
  },

  {
    kind: "work",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:02:16.037Z",
    groupedEntries: [
      {
        id: crypto.randomUUID(),
        text: "Ran command",
        command: "nl -ba src/index.css | sed -n '1,120p",
        createdAt: new Date().toISOString(),
      },
    ],
    showCompletionDivider: false,
  },

  {
    kind: "message",
    id: crypto.randomUUID(),
    createdAt: "2026-04-23T11:03:00.110Z",
    durationStart: "2026-04-23T11:02:14.322Z",
    message: {
      id: crypto.randomUUID(),
      role: "assistant",
      text: `
# Dashboard Update

Added a new footer action below the \`Settings\` section.

## What Changed

- Added footer button
- Matched existing styling
- Improved spacing

### Commands Run

- \`bun fmt\`
- \`bun lint\`
- \`bun typecheck\`

---

## Example

\`\`\`tsx
<SidebarMenuButton>
  New button
</SidebarMenuButton>
\`\`\`

> Everything completed successfully.

Visit [Vercel](https://vercel.com)

Inline code example: \`const value = true\`
`,
      createdAt: new Date().toISOString(),
    },
    showCompletionDivider: true,
  },
];
