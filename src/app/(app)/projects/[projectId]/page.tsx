import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectWithTasks } from "@/features/projects/queries";
import { TaskStatusBadge } from "@/features/tasks/components/task-status-badge";
import { EmptyState } from "@/components/ui/empty-state";

const ProjectPage = async ({ params }: PageProps<"/projects/[projectId]">) => {
  const { projectId } = await params;

  const id = Number(projectId);

  if (!Number.isInteger(id) || id <= 0) {
    notFound();
  }

  const { project, tasks } = await getProjectWithTasks(id);

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

      {tasks.length > 0 ? (
        <ul className="mt-8 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              {task.title}
              <TaskStatusBadge status={task.status} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState className="mt-8" title="Задач пока нет" />
      )}
    </section>
  );
};

export default ProjectPage;
