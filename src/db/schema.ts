import { relations } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Пользователи и сессии добавит Better Auth на этапе 5,
// тогда же у проектов появится userId.

export const projects = sqliteTable("projects", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  createdAt: integer({ mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const taskStatuses = ["todo", "in_progress", "done"] as const;
export type TaskStatus = (typeof taskStatuses)[number];

export const tasks = sqliteTable(
  "tasks",
  {
    id: integer().primaryKey({ autoIncrement: true }),
    projectId: integer()
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
    title: text().notNull(),
    status: text({ enum: taskStatuses }).notNull().default("todo"),
    createdAt: integer({ mode: "timestamp_ms" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [index("tasks_project_id_idx").on(t.projectId)],
);

export const projectsRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
}));

export const tasksRelations = relations(tasks, ({ one }) => ({
  project: one(projects, { fields: [tasks.projectId], references: [projects.id] }),
}));

export type Project = typeof projects.$inferSelect;
export type Task = typeof tasks.$inferSelect;
