export function parseImportUrls(raw: string): string[] {
  const input = (raw || '').trim();
  if (!input) return [];

  const unique = new Set<string>();

  const pushIfValid = (value: unknown) => {
    if (typeof value !== 'string') return;
    const trimmed = value.trim();
    if (!trimmed) return;

    try {
      const parsed = new URL(trimmed);
      if (!/^https?:$/i.test(parsed.protocol)) return;
      unique.add(parsed.toString());
    } catch {
      // ignore invalid urls
    }
  };

  try {
    const parsed = JSON.parse(input);
    if (Array.isArray(parsed)) {
      parsed.forEach(pushIfValid);
      return Array.from(unique);
    }
  } catch {
    // non-json input, continue
  }

  const normalized = input.replace(/\\n/g, '\n');
  normalized
    .split(/[\n,]+/g)
    .map((item) => item.trim())
    .forEach(pushIfValid);

  return Array.from(unique);
}
