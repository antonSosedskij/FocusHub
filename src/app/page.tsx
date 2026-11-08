const features = [
  "Проекты и задачи с фильтрами в URL",
  "Помодоро-таймер, привязанный к задаче",
  "Статистика фокуса по периодам",
  "Публичный профиль",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-16 sm:py-24">
      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium tracking-wide text-rose-600 uppercase dark:text-rose-400">
          Этап 0 · каркас
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Focus Hub</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Проекты, задачи и помодоро-сессии в одном месте.
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            {feature}
          </li>
        ))}
      </ul>
    </main>
  );
}
