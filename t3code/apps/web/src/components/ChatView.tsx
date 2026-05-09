import { useState } from "react";
import { ThreadEntries, ThreadEntry } from "../types";
import ChatTimeline from "./ChatTimeline";
import { MOCK_THREAD_ENTRIES } from "../mocks/chatData";

export default function HomePage() {
const [rows, setRows] = useState<ThreadEntry[]>(MOCK_THREAD_ENTRIES);
  const [isWorking, setIsWorking] = useState(false);
  const [workingStartedAt, setWorkingStartedAt] = useState<string | null>(null);

  return (
    <div className="h-screen bg-background">
      <ChatTimeline
        rows={rows}
        isWorking={isWorking}
        workingStartedAt={workingStartedAt}
      />
    </div>
  );
}
