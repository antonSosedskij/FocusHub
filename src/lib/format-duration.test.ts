import { describe, expect, test } from "vitest";

import { formatDuration } from "./format-duration";

describe("formatDuration", () => {
  test.each([
    [0, "00:00"],
    [59, "00:59"],
    [1500, "25:00"],
    [3600, "1:00:00"],
    [3725, "1:02:05"],
  ])("%i с → %s", (input, expected) => {
    expect(formatDuration(input)).toBe(expected);
  });

  test("отрицательное и дробное значение не ломают формат", () => {
    expect(formatDuration(-5)).toBe("00:00");
    expect(formatDuration(61.9)).toBe("01:01");
  });
});
