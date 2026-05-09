export function timeStampFormat(
  createdAt: string,
  durationStart?: string,
  showDuration = false,
) {
  const time = new Date(createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  if (!showDuration || !durationStart) {
    return time;
  }

  const diff =
    new Date(createdAt).getTime() - new Date(durationStart).getTime();

  const seconds = Math.floor(diff / 1000);

  return `${time} • ${seconds}s`;
}
