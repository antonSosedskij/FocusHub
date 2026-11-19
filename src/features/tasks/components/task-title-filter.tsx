import Form from "next/form";

import { type TaskStatus } from "@/db/schema";

export interface TaskTitleFilterProps {
  baseHref: string;
  className?: string;
  query?: string;
  status?: TaskStatus;
}

export const TaskTitleFilter = ({
  baseHref,
  query,
  status,
  className = "",
}: TaskTitleFilterProps) => {
  return (
    <Form
      scroll={false}
      action={baseHref}
      role="search"
      className={`flex max-w-md gap-2 ${className}`}
    >
      {status ? <input type="hidden" name="status" value={status} /> : null}
      <input
        type="search"
        name="q"
        key={query ?? ""}
        defaultValue={query}
        aria-label="Поиск по названию задачи"
        placeholder="Поиск по названию"
        className="min-w-0 flex-1 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
      />
      <button
        type="submit"
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Найти
      </button>
    </Form>
  );
};
