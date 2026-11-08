import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import HomePage from "./page";

// Синхронный серверный компонент рендерится в RTL как обычный.
// Async-компоненты так не тестируются: для них e2e (см. docs Next про тестирование).
test("главная показывает заголовок", () => {
  render(<HomePage />);

  expect(screen.getByRole("heading", { level: 1, name: "Focus Hub" })).toBeInTheDocument();
});
