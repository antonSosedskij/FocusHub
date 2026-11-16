import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  /** Кнопка или ссылка под текстом, например «Ко всем проектам». */
  children?: ReactNode;
  /** Отступы снаружи, например `mt-8`. */
  className?: string;
};

export function EmptyState({ title, description, children, className = "" }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-xl border border-dashed border-zinc-300 px-6 py-12 text-center dark:border-zinc-700 ${className}`}
    >
      <p className="text-lg font-medium">{title}</p>
      {description && (
        <p className="max-w-sm text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
