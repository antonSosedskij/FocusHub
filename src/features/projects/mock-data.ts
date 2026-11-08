// Временные данные для этапа 1. На этапе 2 заменяем на запросы в БД,
// поэтому сигнатуры как у будущего data layer: async и с задержкой.
import type { Project, Task, TaskStatus } from "@/db/schema";

const DELAY_MS = 600;

/** У этого проекта загрузка задач падает — чтобы было на чём проверить error.tsx. */
export const BROKEN_PROJECT_ID = 4;

const projects: Project[] = [
  {
    id: 1,
    name: "Focus Hub",
    description: "Учебный проект на Next.js",
    createdAt: new Date("2026-11-01"),
  },
  {
    id: 2,
    name: "Английский",
    description: "Ежедневная практика",
    createdAt: new Date("2026-10-15"),
  },
  { id: 3, name: "Без описания", description: null, createdAt: new Date("2026-10-20") },
  {
    id: BROKEN_PROJECT_ID,
    name: "Сломанный проект",
    description: "Задачи не грузятся",
    createdAt: new Date("2026-11-05"),
  },
];

const tasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    title: "Этап 0: каркас",
    status: "done",
    createdAt: new Date("2026-11-08"),
  },
  {
    id: 2,
    projectId: 1,
    title: "Этап 1: роутинг и layouts",
    status: "in_progress",
    createdAt: new Date("2026-11-08"),
  },
  {
    id: 3,
    projectId: 1,
    title: "Этап 2: Server Components",
    status: "todo",
    createdAt: new Date("2026-11-08"),
  },
  {
    id: 4,
    projectId: 1,
    title: "Этап 3: Server Actions",
    status: "todo",
    createdAt: new Date("2026-11-08"),
  },
  {
    id: 5,
    projectId: 2,
    title: "Прочитать главу книги",
    status: "todo",
    createdAt: new Date("2026-11-02"),
  },
  {
    id: 6,
    projectId: 2,
    title: "Посмотреть серию без субтитров",
    status: "done",
    createdAt: new Date("2026-11-03"),
  },
  {
    id: 7,
    projectId: 2,
    title: "Выписать новые слова",
    status: "in_progress",
    createdAt: new Date("2026-11-04"),
  },
];

function delay(ms = DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProjects(): Promise<Project[]> {
  await delay();
  return projects;
}

/** `undefined`, если проекта нет. Что с этим делать на странице — решает страница. */
export async function getProject(id: number): Promise<Project | undefined> {
  await delay();
  return projects.find((p) => p.id === id);
}

export type TaskFilters = {
  status?: TaskStatus;
  /** Поиск по подстроке в названии, без учёта регистра. */
  query?: string;
};

export async function getProjectTasks(
  projectId: number,
  filters: TaskFilters = {},
): Promise<Task[]> {
  await delay();
  if (projectId === BROKEN_PROJECT_ID) {
    throw new Error("Не удалось загрузить задачи");
  }

  const query = filters.query?.trim().toLowerCase();
  return tasks.filter(
    (t) =>
      t.projectId === projectId &&
      (!filters.status || t.status === filters.status) &&
      (!query || t.title.toLowerCase().includes(query)),
  );
}
