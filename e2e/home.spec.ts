import { expect, test } from "@playwright/test";

test("главная открывается", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Focus Hub");
  await expect(page.getByRole("heading", { level: 1, name: "Focus Hub" })).toBeVisible();
});
