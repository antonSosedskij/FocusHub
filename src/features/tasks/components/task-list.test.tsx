import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import type { Task } from "@/db/schema";

import { TaskList } from "./task-list";

const tasks: Task[] = [
  { id: 1, projectId: 1, title: "Написать тесты", status: "todo", createdAt: new Date() },
  { id: 2, projectId: 1, title: "Сделать ревью", status: "done", createdAt: new Date() },
];

describe("TaskList", () => {
  test("показывает задачи со статусами", () => {
    render(<TaskList tasks={tasks} hasFilters={false} resetHref="/projects/1" />);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Написать тесты");
    expect(items[0]).toHaveTextContent("К работе");
    expect(items[1]).toHaveTextContent("Готово");
  });

  test("без задач и без фильтров — «Задач пока нет»", () => {
    render(<TaskList tasks={[]} hasFilters={false} resetHref="/projects/1" />);

    expect(screen.getByText("Задач пока нет")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Сбросить фильтры" })).not.toBeInTheDocument();
  });

  test("без задач с фильтрами — «Ничего не найдено» и сброс", () => {
    render(<TaskList tasks={[]} hasFilters resetHref="/projects/1" />);

    expect(screen.getByText("Ничего не найдено")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Сбросить фильтры" })).toHaveAttribute(
      "href",
      "/projects/1",
    );
  });
});
