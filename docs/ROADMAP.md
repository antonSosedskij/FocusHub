# Roadmap Focus Hub

Здесь статус этапов и актуальные ссылки.
Ссылки сверены с документацией Next 16.4, которая лежит в `node_modules/next/dist/docs/`. Перед каждым этапом всё равно перепроверяем.

| #   | Этап                                     | Статус       |
| --- | ---------------------------------------- | ------------ |
| 0   | Каркас                                   | ✅           |
| 1   | Роутинг и layouts                        | ⏳ следующий |
| 2   | Server vs Client Components              | —            |
| 3   | Мутации: Server Actions и формы React 19 | —            |
| 4   | Кэширование и рендеринг                  | —            |
| 5   | Auth (Better Auth)                       | —            |
| 6   | Zustand                                  | —            |
| 7   | Concurrent React                         | —            |
| 8   | TanStack Query                           | —            |
| 9   | React Hook Form + Zod                    | —            |
| 10  | Тесты, перф, деплой                      | —            |

## Стек (на 2026-11-08)

| Пакет             | Версия      | Заметка                                                                        |
| ----------------- | ----------- | ------------------------------------------------------------------------------ |
| Node              | 24 LTS      | `.nvmrc`; Vitest 5 требует ≥ 22.12                                             |
| Next.js           | 16.4.5      | App Router, Turbopack, **Cache Components включены** (`cacheComponents: true`) |
| React             | 19.3.1      | React Compiler пока выключен, включаем на этапе 10                             |
| TypeScript        | 6.0.3       | 7.0 уже вышел, но typescript-eslint поддерживает только `<6.1`                 |
| ESLint            | 9.39        | 10 пока не поддерживают плагины из `eslint-config-next`                        |
| Tailwind CSS      | 4.3         | через `@tailwindcss/turbopack`, без `tailwind.config`                          |
| Drizzle ORM / Kit | 0.45 / 0.31 | SQLite через better-sqlite3, `casing: "snake_case"`                            |
| Better Auth       | 1.7         | установлен, настраиваем на этапе 5 (Auth.js v5 так и не вышел из беты)         |
| Vitest            | 5.1         | + RTL 16, user-event 14, jest-dom                                              |
| Playwright        | 1.65        | e2e против прод-сборки на порту 3100                                           |

Zustand, TanStack Query, React Hook Form и Zod ставим на их этапах, чтобы не держать в проекте неиспользуемые пакеты.

**Про деплой:** файловая SQLite на Vercel не живёт. На этапе 10 выбираем: сменить драйвер Drizzle на libsql/Turso (схема почти не меняется) или деплоить туда, где есть диск.

**Про Cache Components:** с ними страницы по умолчанию динамические, а кэшируем явно через `'use cache'`. Обращение к динамическим данным (cookies, searchParams, непрокэшированный запрос в БД) вне `<Suspense>` ломает сборку с понятной ошибкой. Это всплывёт уже на этапах 1–2, подробно разбираем на этапе 4.

## Ссылки по этапам

**1. Роутинг и layouts**

- https://nextjs.org/docs/app/getting-started/layouts-and-pages — файловый роутинг, layouts, динамические сегменты
- https://nextjs.org/docs/app/getting-started/linking-and-navigating — `Link`, prefetch, клиентская навигация
- https://nextjs.org/docs/app/getting-started/error-handling — `error.tsx`, `not-found`
- https://nextjs.org/docs/app/getting-started/project-structure — route groups `(name)`, приватные папки `_name`

**2. Server vs Client Components**

- https://react.dev/reference/rsc/server-components — модель RSC от React
- https://react.dev/reference/rsc/use-client — что делает директива и где граница
- https://nextjs.org/docs/app/getting-started/server-and-client-components — как это устроено в Next
- https://nextjs.org/docs/app/getting-started/fetching-data — данные в серверных компонентах, стриминг

**3. Мутации**

- https://react.dev/reference/rsc/server-functions — server functions, `'use server'`
- https://react.dev/reference/react/useActionState — состояние формы-действия
- https://react.dev/reference/react-dom/hooks/useFormStatus — pending внутри формы
- https://react.dev/reference/react/useOptimistic — оптимистичный UI
- https://nextjs.org/docs/app/getting-started/mutating-data — actions в Next

**4. Кэширование**

- https://nextjs.org/docs/app/getting-started/caching — `'use cache'`, Cache Components
- https://nextjs.org/docs/app/getting-started/revalidating — revalidate по времени, пути и тегу

**5. Auth**

- https://nextjs.org/docs/app/guides/authentication — паттерны авторизации в App Router
- https://nextjs.org/docs/app/guides/authentication-with-cache-components — то же с учётом Cache Components
- https://nextjs.org/docs/app/getting-started/proxy — `proxy.ts` (бывший middleware)
- https://www.better-auth.com/docs/integrations/next — Better Auth в Next

**6. Zustand**

- https://zustand.docs.pmnd.rs/getting-started/introduction — базовый API
- https://zustand.docs.pmnd.rs/guides/nextjs — стор на запрос, провайдер, гидрация
- https://zustand.docs.pmnd.rs/middlewares/persist — persist и гидрация из storage

**7. Concurrent React**

- https://react.dev/reference/react/useTransition — неблокирующие обновления
- https://react.dev/reference/react/useDeferredValue — отложенное значение
- https://react.dev/reference/react/use — чтение промиса и контекста
- https://react.dev/reference/react/Suspense — границы загрузки

**8. TanStack Query**

- https://tanstack.com/query/latest/docs/framework/react/overview — зачем и базовый API
- https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr — Query + App Router + RSC

**9. React Hook Form + Zod**

- https://react-hook-form.com/get-started — регистрация полей, неконтролируемая модель
- https://zod.dev — схемы и вывод типов

**10. Тесты, перф, деплой**

- https://playwright.dev/docs/intro — первый e2e-тест
- https://nextjs.org/docs/app/guides/testing — что и как тестировать в App Router
- https://react.dev/learn/react-compiler — компилятор в Next
