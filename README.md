# Focus Hub

Учебный проект на Next.js: проекты, задачи, помодоро-таймер и статистика. План и статус: [docs/ROADMAP.md](docs/ROADMAP.md).

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
