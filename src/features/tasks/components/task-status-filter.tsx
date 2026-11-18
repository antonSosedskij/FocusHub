import Link from "next/link";

import { type TaskStatus, taskStatuses } from "@/db/schema";

import { taskFilterHref } from "../filter-href";
import { taskStatusLabels } from "../status";

export interface TaskStatusFilterProps {
  /** Текущий статус из URL. `undefined` — выбрано «Все». */
  status?: TaskStatus;
  query?: string;
  baseHref: string;
  className?: string;
}

const chip =
  "rounded-full border px-3 py-1 text-sm transition-colors " +
  "border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 " +
  "dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100 " +
  "aria-[current=true]:border-zinc-900 aria-[current=true]:bg-zinc-900 aria-[current=true]:text-white " +
  "dark:aria-[current=true]:border-zinc-100 dark:aria-[current=true]:bg-zinc-100 dark:aria-[current=true]:text-zinc-900";

export const TaskStatusFilter = ({
  status,
  query,
  baseHref,
  className = "",
}: TaskStatusFilterProps) => {
  return (
    <nav aria-label="Фильтр по статусу" className={`flex flex-wrap gap-2 ${className}`}>
      <Link
        href={taskFilterHref(baseHref, { query })}
        scroll={false}
        aria-current={status === undefined ? "true" : undefined}
        className={chip}
      >
        Все
      </Link>
      {taskStatuses.map((task) => (
        <Link
          key={task}
          href={taskFilterHref(baseHref, { status: task, query })}
          scroll={false}
          aria-current={task === status ? "true" : undefined}
          className={chip}
        >
          {taskStatusLabels[task]}
        </Link>
      ))}
    </nav>
  );
};
