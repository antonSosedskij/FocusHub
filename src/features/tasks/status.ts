import { taskStatuses, type TaskStatus } from "@/db/schema";

export const taskStatusLabels: Record<TaskStatus, string> = {
  todo: "К работе",
  in_progress: "В работе",
  done: "Готово",
};

/** Type guard: пригодится, когда статус придёт строкой из URL. */
export function isTaskStatus(value: unknown): value is TaskStatus {
  return typeof value === "string" && (taskStatuses as readonly string[]).includes(value);
}
