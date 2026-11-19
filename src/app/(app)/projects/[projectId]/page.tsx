import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectWithTasks } from "@/features/projects/queries";
import { isTaskStatus } from "@/features/tasks/status";
import { TaskList } from "@/features/tasks/components/task-list";
import { TaskStatusFilter } from "@/features/tasks/components/task-status-filter";
import { TaskTitleFilter } from "@/features/tasks/components/task-title-filter";

const ProjectPage = async ({ params, searchParams }: PageProps<"/projects/[projectId]">) => {
  const { projectId } = await params;
  const { status, q } = await searchParams;

  const id = Number(projectId);
  const validStatus = isTaskStatus(status) ? status : undefined;
  const validQuery = typeof q === "string" ? q : undefined;

  const hasFilters = !!validQuery || !!validStatus;

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const { project, tasks } = await getProjectWithTasks(id, {
    status: validStatus,
    query: validQuery,
  });

  if (!project) {
    notFound();
  }

  const { name, description } = project;

  return (
    <section>
      <Link
        href="/projects"
        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Все проекты
      </Link>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">{name}</h1>
      {description ? (
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : (
        <p className="mt-1 text-zinc-400 italic dark:text-zinc-500">Без описания</p>
      )}

      <TaskStatusFilter
        className="mt-6"
        status={validStatus}
        query={validQuery}
        baseHref={`/projects/${id}`}
      />

      <TaskTitleFilter
        className="mt-3"
        baseHref={`/projects/${id}`}
        status={validStatus}
        query={validQuery}
      />

      <TaskList
        className="mt-4"
        tasks={tasks}
        hasFilters={hasFilters}
        resetHref={`/projects/${id}`}
      />
    </section>
  );
};

export default ProjectPage;
