export function DateSplitHook(date: any) {
  return date.toISOString().split("T")[0].split('-');
}
