# Focus Hub

Учебный проект на Next.js: проекты, задачи, помодоро-таймер и статистика. План и статус: [docs/ROADMAP.md](docs/ROADMAP.md).

## Что умеет

- **Аккаунт.** Регистрация и вход, данные пользователя хранятся в БД.
- **Проекты и задачи.** Создание, редактирование и удаление, статусы задач, фильтры и поиск, которые живут в URL.
- **Помодоро-таймер.** Привязан к задаче. Таймер работает на клиенте, завершённые сессии сохраняются в БД.
- **Статистика.** Сколько времени ушло на фокус по проектам и задачам: серверная агрегация, графики, фильтр по периоду.
- **Публичный профиль.** Страница со статистикой пользователя, которую можно показать другим.

## Стек

Next.js (App Router, React Server Components, Server Actions), React 19, TypeScript, Tailwind CSS, Drizzle ORM + SQLite, Better Auth, Zustand, TanStack Query, React Hook Form + Zod, Vitest + Testing Library, Playwright. Версии — в [ROADMAP](docs/ROADMAP.md#стек-на-2026-11-08).

## Запуск

```bash
nvm use
npm ci
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

Для e2e один раз: `npx playwright install chromium`, потом `npm run test:e2e`.

Остальные команды — в [CLAUDE.md](CLAUDE.md#команды).
