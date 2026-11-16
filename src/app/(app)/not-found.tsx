import { EmptyState } from "@/components/ui/empty-state";
import Link from "next/link";

const ProjectNotFound = () => {
  return (
    <EmptyState
      title="Страница не найдена"
      description="Возможно, ее удалили или в ссылке опечатка."
    >
      <Link
        href="/projects"
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Ко всем проектам
      </Link>
    </EmptyState>
  );
};

export default ProjectNotFound;
