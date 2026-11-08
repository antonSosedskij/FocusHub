/** 1500 → "25:00", 3725 → "1:02:05". Для таймера и статистики. */
export function formatDuration(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  const ss = String(seconds).padStart(2, "0");
  if (hours === 0) return `${String(minutes).padStart(2, "0")}:${ss}`;
  return `${hours}:${String(minutes).padStart(2, "0")}:${ss}`;
}
