import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema";

export function createDb(fileName = process.env.DB_FILE_NAME ?? "local.db") {
  const sqlite = new Database(fileName);
  sqlite.pragma("journal_mode = WAL");
  // В SQLite внешние ключи по умолчанию выключены
  sqlite.pragma("foreign_keys = ON");
  return drizzle({ client: sqlite, schema, casing: "snake_case" });
}

export type Db = ReturnType<typeof createDb>;
