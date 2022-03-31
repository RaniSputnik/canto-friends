export type Tone = 1 | 2 | 3 | 4 | 5 | 6;

export function toneToImageSrc(tone: Tone): string {
  return `img/tone-${tone}.png`;
}

export function textToTones(text: string): Tone[] {
  const results = text.match(/\d+/g);
  if (!Array.isArray(results)) {
    return [];
  }
  return results.map((v: string): Tone => parseInt(v) as Tone);
}
