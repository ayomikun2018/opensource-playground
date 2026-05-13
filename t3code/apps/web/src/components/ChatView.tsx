import { useState } from "react";
import { ThreadEntry } from "../types";
import ChatTimeline from "./ChatTimeline";
import { MOCK_THREAD_ENTRIES } from "../mocks/chatData";

export default function HomePage() {
  const [rows, setRows] = useState<ThreadEntry[]>(MOCK_THREAD_ENTRIES);

  return (
    <div className="h-screen bg-background">
      <ChatTimeline rows={rows} />
    </div>
  );
}
