const ProjectLoading = () => {
  return (
    <div role="status" className="animate-pulse">
      <p className="sr-only">Загрузка...</p>
      <div aria-hidden className="h-8 w-40 rounded-md bg-zinc-200 dark:bg-zinc-800" />
      <div aria-hidden className="mt-6 grid gap-3 sm:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="h-5 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-2 h-4 w-3/4 rounded bg-zinc-100 dark:bg-zinc-800/60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLoading;
