import { getProject, getProjectTasks, TaskFilters } from "@/features/projects/mock-data";

export const getProjectWithTasks = async (id: number, filters: TaskFilters) => {
  const [project, tasks] = await Promise.all([getProject(id), getProjectTasks(id, filters)]);

  return { project, tasks };
};
