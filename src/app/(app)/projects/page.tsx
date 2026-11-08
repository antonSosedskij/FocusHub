import { getProjects } from "@/features/projects/mock-data";
import Link from "next/link";

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight">Проекты</h1>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {projects.map(({ id, name, description }) => {
          return (
            <li
              key={id}
              className="relative rounded-xl border border-zinc-200 bg-white px-4 py-3 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
            >
              <Link
                href={`/projects/${id}`}
                className="font-medium after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-rose-500"
              >
                {name}
              </Link>
              {description ? (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
              ) : (
                <p className="mt-1 text-sm text-zinc-400 italic dark:text-zinc-500">Без описания</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsPage;
