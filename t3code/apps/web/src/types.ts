export type Thread = {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
};
export type Project = {
  id: string;
  name: string;
  createdAt: string;
  threads: Thread[];
};
export type RowKind = "user" | "work" | "assistant" | "working";

export type MessageEntry = {
  kind: "message";
  id: string;
  createdAt: string;
  durationStart: string;
  showCompletionDivider?: boolean;

  message: {
    id: string;
    role: "user" | "assistant";
    text: string;
    createdAt: string;
  };
};
export type ProposedPlanEntry = {
  kind: "proposed-plan";
  id: string;
  createdAt: string;
  proposedPlan: {
    id: string;
    planMarkdown: string;
    createdAt: string;
  };
};
export type WorkGroupedEntry = {
  id: string;
  text: string;
  command?: string;
  createdAt: string;
  status?: "pending" | "running" | "completed";
  showCompletionDivider?: boolean;
};

export type WorkEntry = {
  kind: "work";
  id: string;
  createdAt: string;
  groupedEntries: WorkGroupedEntry[];
  showCompletionDivider?: boolean;
};
export type WorkingRow = {
  kind: "working";
  id: string;
  createdAt?: string;
};

export type ThreadEntry = MessageEntry | WorkEntry | ProposedPlanEntry;

export type ThreadEntries = ThreadEntry[];

export interface ChatTimelineProps {
  rows: ThreadEntries;
  isWorking?: boolean;
  workingStartedAt?: string | null;
}
