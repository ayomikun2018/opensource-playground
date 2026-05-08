import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui/tooltip";
import React, { useMemo, useState } from "react";
import { WEB_APP_VERSION } from "../branding";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@repo/ui/sidebar";
import {
  ChevronRightIcon,
  FolderIcon,
  PlusIcon,
  SettingsIcon,
  SquarePen,
} from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MOCK_PROJECTS } from "../mocks/sidebarData";
import { Button } from "../../../../packages/ui/src/components/ui/button";
import { Input } from "../../../../packages/ui/src/components/ui/input";
import { cn } from "@repo/ui/utils";
import { Thread } from "../types";

export const isNonEmpty = (self: string): boolean => self.length > 0;

export function AppSidebar() {
  return (
    <div className="flex flex-col h-full p-2 space-y-2">
      <AppSidebarHeader />
      <div className="flex-1 overflow-y-auto">
        <AppSidebarBody />
      </div>
      <AppSidebarFooter />
    </div>
  );
}
function AppSidebarHeader() {
  return (
    <Tooltip>
      <TooltipTrigger>
        {" "}
        <div className="px-2">
          <span className="flex gap-1 items-center j">
            <T3Wordmark />
            <h1 className="text-sm truncate tracking-tight font-medium text-gray-800">
              {" "}
              Code
            </h1>
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Version {WEB_APP_VERSION}</p>
      </TooltipContent>
    </Tooltip>
  );
}
function SidebarProjectThreadList({ threads }: { threads: Thread[] }) {
  if (!threads || threads.length === 0) {
    return (
      <SidebarMenuSub className="border-l border-gray-100 py-1">
        <span className="px-3 text-[10px] text-muted-foreground/50">
          No threads yet
        </span>
      </SidebarMenuSub>
    );
  }

  return (
    <SidebarMenuSub className="border-l border-gray-100">
      {threads.map((thread) => (
        <SidebarMenuButton
          key={thread.id}
          className="h-8 !bg-transparent hover:!bg-accent/30"
        >
          <Link
            to="/$threadId"
            params={{ threadId: thread.id }}
            className="flex w-full items-center justify-between"
          >
              <span className="truncate text-[11px] text-foreground/70">
                {thread.title}
              </span>
              <span className="text-[9px] text-muted-foreground/60">
                {thread.updatedAt}
              </span>
          </Link>
        </SidebarMenuButton>
      ))}
    </SidebarMenuSub>
  );
}
function AppSidebarBody() {
  const [cwd, setCwd] = useState("");
  const [showAddProjectSection, setShowAddProjectSection] = useState(false);

  const [expandedProjects, setExpandedProjects] = useState<
    Record<string, boolean>
  >({});

  const cwdTitle = cwd.trim().split(/[/\\]/).filter(isNonEmpty).pop() ?? cwd;

  const handleCreateProject = () => {
    setCwd("");
    setShowAddProjectSection(false);
  };
  const projects = useMemo(() => {
    return MOCK_PROJECTS;
  }, []);

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <SidebarGroup className="px-2">
      <div className="flex justify-between items-center mb-2">
        <p className="capitalize text-[11px] font-bold text-muted-foreground/60">
          PROJECTS
        </p>
        <button
          onClick={() => setShowAddProjectSection(!showAddProjectSection)}
        >
          <PlusIcon
            className={cn(
              "size-3.5 transition-transform",
              showAddProjectSection && "rotate-45",
            )}
          />
        </button>
      </div>
      {showAddProjectSection && (
        <div className="flex gap-2 items-center justify-center py-1">
          <Input
            placeholder="/path/to/project"
            className=" w-3/4 border border-blue-400  "
            value={cwd}
            onChange={(e) => setCwd(e.target.value)}
          />
          <Button
            disabled={!cwd.trim()}
            onClick={handleCreateProject}
            className="bg-blue-500 rounded-md  w-1/4 text-sm"
          >
            Add
          </Button>
        </div>
      )}
      <div className="space-y-1">
        {projects.map((project) => {
          const isExpanded = expandedProjects[project.id];

          return (
            <div key={project.id} className="flex flex-col">
              <SidebarMenuButton
                className="group/btn hover:bg-accent/50 transition-colors"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex w-full items-center justify-between py-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <ChevronRightIcon
                      className={cn(
                        "size-3 text-muted-foreground transition-transform duration-200",
                        isExpanded && "rotate-90",
                      )}
                    />
                    <FolderIcon className="size-3.5 " />
                    <span className="truncate text-xs font-medium">
                      {project.name}
                    </span>
                  </div>
                  <SquarePen className="size-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </div>
              </SidebarMenuButton>

              {isExpanded && (
                <SidebarProjectThreadList threads={project.threads} />
              )}
            </div>
          );
        })}
      </div>
    </SidebarGroup>
  );
}

function AppSidebarFooter() {
  const navigate = useNavigate();
  const handleSettingsClick = () => {
    void navigate({ to: "/settings" });
  };
  return (
    <SidebarFooter className="p-2 ">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="sm"
            className="gap-2 px-2 py-1.5 text-muted-foreground/70 hover:bg-accent hover:text-foreground"
            onClick={handleSettingsClick}
          >
            <SettingsIcon className="size-3.5" />
            <span className="text-xs">Settings</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
function T3Wordmark() {
  return (
    <svg
      aria-label="T3"
      className="h-2.5 w-auto shrink-0 text-foreground"
      viewBox="15.5309 37 94.3941 56.96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.4509 93V47.56H15.5309V37H64.3309V47.56H46.4109V93H33.4509ZM86.7253 93.96C82.832 93.96 78.9653 93.4533 75.1253 92.44C71.2853 91.3733 68.032 89.88 65.3653 87.96L70.4053 78.04C72.5386 79.5867 75.0186 80.8133 77.8453 81.72C80.672 82.6267 83.5253 83.08 86.4053 83.08C89.6586 83.08 92.2186 82.44 94.0853 81.16C95.952 79.88 96.8853 78.12 96.8853 75.88C96.8853 73.7467 96.0586 72.0667 94.4053 70.84C92.752 69.6133 90.0853 69 86.4053 69H80.4853V60.44L96.0853 42.76L97.5253 47.4H68.1653V37H107.365V45.4L91.8453 63.08L85.2853 59.32H89.0453C95.9253 59.32 101.125 60.8667 104.645 63.96C108.165 67.0533 109.925 71.0267 109.925 75.88C109.925 79.0267 109.099 81.9867 107.445 84.76C105.792 87.48 103.259 89.6933 99.8453 91.4C96.432 93.1067 92.0586 93.96 86.7253 93.96Z"
        fill="currentColor"
      />
    </svg>
  );
}
