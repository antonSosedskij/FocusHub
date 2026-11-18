import { describe, expect, test } from "vitest";

import { taskFilterHref } from "./filter-href";

describe("taskFilterHref", () => {
  test("статус и поиск попадают в query", () => {
    expect(taskFilterHref("/projects/1", { status: "done", query: "этап" })).toEqual({
      pathname: "/projects/1",
      query: { status: "done", q: "этап" },
    });
  });

  test("«Все» без поиска — чистый путь без параметров", () => {
    expect(taskFilterHref("/projects/1", {})).toEqual({ pathname: "/projects/1", query: {} });
  });

  test("поиск сохраняется, когда статус сброшен", () => {
    expect(taskFilterHref("/projects/1", { query: "этап" }).query).toEqual({ q: "этап" });
  });

  test("пустой и пробельный поиск отбрасывается", () => {
    expect(taskFilterHref("/projects/1", { status: "todo", query: "   " }).query).toEqual({
      status: "todo",
    });
  });
});
