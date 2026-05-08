import { create } from "zustand";

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
type Store = {
  projects: Record<string, Project>;
  createProject: (name: string) => void;
};

export const useStore = create<Store>((set) => ({
  projects: {},

  createProject: (name) =>
    set((state) => {
      const id = crypto.randomUUID();
      const newProject: Project = {
        id,
        name,
        createdAt: new Date().toISOString(),
        threads: [],
      };

      return {
        projects: {
          ...state.projects,
        id: newProject,
        },
      };
    }),
}));
