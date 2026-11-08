import { expect, test } from "vitest";

import { isTaskStatus } from "./status";

test("isTaskStatus пропускает только известные статусы", () => {
  expect(isTaskStatus("done")).toBe(true);
  expect(isTaskStatus("DONE")).toBe(false);
  expect(isTaskStatus(["done"])).toBe(false);
  expect(isTaskStatus(undefined)).toBe(false);
});
