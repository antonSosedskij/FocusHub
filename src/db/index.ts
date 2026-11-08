import "server-only";

import { createDb, type Db } from "./client";

// В dev Next перезагружает модули при каждой правке.
// Держим одно соединение в globalThis, чтобы не плодить их.
const globalForDb = globalThis as unknown as { db?: Db };

export const db = globalForDb.db ?? createDb();

if (process.env.NODE_ENV !== "production") {
  globalForDb.db = db;
}
