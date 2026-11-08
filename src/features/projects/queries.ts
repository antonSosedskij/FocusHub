import { getProject, getProjectTasks } from "@/features/projects/mock-data";

export const getProjectWithTasks = async (id: number) => {
  const [project, tasks] = await Promise.all([getProject(id), getProjectTasks(id)]);

  return { project, tasks };
};
