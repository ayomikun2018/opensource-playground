// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from "react";
import "../globals.css";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { WEB_APP_NAME } from "../branding";
import AppSidebarLayout from "../components/AppSidebarLayout";
import { TooltipProvider } from "@repo/ui/components/ui/tooltip";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: WEB_APP_NAME,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <TooltipProvider>
        <AppSidebarLayout>
          <Outlet />
        </AppSidebarLayout>
      </TooltipProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}

        <Scripts />
      </body>
    </html>
  );
}
