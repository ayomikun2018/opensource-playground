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
