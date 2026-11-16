"use client";

import { useEffect } from "react";

import { EmptyState } from "@/components/ui/empty-state";

const ProjectError = ({ error, retry }: { error: unknown; retry: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Не удалось загрузить проект"
      description="Что-то пошло не так на нашей стороне. Попробуйте ещё раз чуть позже."
    >
      <button
        type="button"
        onClick={retry}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Попробовать снова
      </button>
    </EmptyState>
  );
};

export default ProjectError;
