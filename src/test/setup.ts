import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Без globals: true RTL не чистит DOM сам, делаем это явно
afterEach(() => {
  cleanup();
});
