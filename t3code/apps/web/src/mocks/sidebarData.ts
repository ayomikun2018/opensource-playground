import { Project } from "../store";

export const MOCK_PROJECTS: Project[] = [
  {
    id: crypto.randomUUID(),
    name: "Fintech App",
    createdAt: new Date().toISOString(),
    threads: [
      {
        id: crypto.randomUUID(),
        title: "Explain the codebase",
        updatedAt: "2h ago",
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        title: "State management",
        updatedAt: "5h ago",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Netflix Clone",
    createdAt: new Date().toISOString(),
    threads: [
      {
        id: crypto.randomUUID(),
        title: "Explain the codebase",
        updatedAt: "2h ago",
        createdAt: new Date().toISOString(),
      },
      {
        id: crypto.randomUUID(),
        title: "State management",
        updatedAt: "5h ago",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Event App",
    createdAt: new Date().toISOString(),
    threads: [],
  },
];
