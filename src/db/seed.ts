// Запуск: npm run db:seed. Импортирует client напрямую, а не index.ts:
// "server-only" вне Next бросает ошибку.
import { createDb } from "./client";
import { projects, tasks } from "./schema";

const db = createDb();

db.transaction((tx) => {
  tx.delete(tasks).run();
  tx.delete(projects).run();

  const [focusHub, english] = tx
    .insert(projects)
    .values([
      { name: "Focus Hub", description: "Учебный проект на Next.js" },
      { name: "Английский", description: "Ежедневная практика" },
      { name: "Без описания" },
    ])
    .returning()
    .all();

  if (!focusHub || !english) throw new Error("Проекты не создались");

  tx.insert(tasks)
    .values([
      { projectId: focusHub.id, title: "Этап 0: каркас", status: "done" },
      { projectId: focusHub.id, title: "Этап 1: роутинг и layouts", status: "in_progress" },
      { projectId: focusHub.id, title: "Этап 2: Server Components" },
      { projectId: focusHub.id, title: "Этап 3: Server Actions" },
      { projectId: english.id, title: "Прочитать главу книги" },
      { projectId: english.id, title: "Посмотреть серию без субтитров", status: "done" },
    ])
    .run();
});

console.log("Seed готов");
