import type { UrlObject } from "url";

import type { TaskStatus } from "@/db/schema";

type TaskFilterParams = {
  /** `undefined` — фильтра по статусу нет («Все»). */
  status?: TaskStatus;
  query?: string;
};

/**
 * Ссылка на список задач с нужными фильтрами для `<Link href>`.
 * Пустые параметры в URL не попадают: без них Next оставил бы `?status=`.
 */
export function taskFilterHref(basePath: string, { status, query }: TaskFilterParams): UrlObject {
  const trimmedQuery = query?.trim();

  return {
    pathname: basePath,
    query: {
      ...(status && { status }),
      ...(trimmedQuery && { q: trimmedQuery }),
    },
  };
}
