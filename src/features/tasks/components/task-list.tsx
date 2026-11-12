import Link from "next/link";

import { EmptyState } from "@/components/ui/empty-state";
import type { Task } from "@/db/schema";

import { TaskStatusBadge } from "./task-status-badge";

type TaskListProps = {
  tasks: Task[];
  hasFilters: boolean;
  resetHref: string;
  className?: string;
};

export function TaskList({ tasks, hasFilters, resetHref, className = "" }: TaskListProps) {
  if (tasks.length > 0) {
    return (
      <ul
        className={`divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
      >
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
            {task.title}
            <TaskStatusBadge status={task.status} />
          </li>
        ))}
      </ul>
    );
  }

  if (hasFilters) {
    return (
      <EmptyState
        className={className}
        title="Ничего не найдено"
        description="Под выбранные фильтры не подходит ни одна задача."
      >
        <Link
          href={resetHref}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          Сбросить фильтры
        </Link>
      </EmptyState>
    );
  }

  return <EmptyState className={className} title="Задач пока нет" />;
}
