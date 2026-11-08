// Скелетоны для loading.tsx. Повторяют форму настоящих страниц,
// чтобы при подгрузке данных контент не прыгал.

const bar = "rounded bg-zinc-200 dark:bg-zinc-800";
const barMuted = "rounded bg-zinc-100 dark:bg-zinc-800/60";

function SkeletonRoot({ children }: { children: React.ReactNode }) {
  return (
    <div role="status" className="animate-pulse">
      <p className="sr-only">Загрузка...</p>
      <div aria-hidden>{children}</div>
    </div>
  );
}

/** Заголовок + сетка карточек. Для списков: проекты и т. п. */
export function CardListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <SkeletonRoot>
      <div className={`h-8 w-40 ${bar}`} />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className={`h-5 w-1/2 ${bar}`} />
            <div className={`mt-2 h-4 w-3/4 ${barMuted}`} />
          </div>
        ))}
      </div>
    </SkeletonRoot>
  );
}

/** Ссылка «назад», заголовок, описание и строки списка. Для страниц сущности: проект и т. п. */
export function DetailSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <SkeletonRoot>
      <div className={`h-4 w-24 ${barMuted}`} />
      <div className={`mt-3 h-8 w-56 ${bar}`} />
      <div className={`mt-2 h-5 w-72 max-w-full ${barMuted}`} />
      <div className="mt-8 divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
        {Array.from({ length: rows }, (_, i) => (
          <div key={i} className="flex items-center justify-between gap-4 px-4 py-3">
            <div className={`h-4 w-2/3 ${bar}`} />
            <div className="h-5 w-16 rounded-full bg-zinc-100 dark:bg-zinc-800/60" />
          </div>
        ))}
      </div>
    </SkeletonRoot>
  );
}
