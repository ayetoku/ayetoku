import ayetlerData from "@/data/ayetler.json";
import type { Ayet } from "@/types";

const ayetler = ayetlerData as Ayet[];

export function getRandomAyetByDuygu(duyguSlug: string): Ayet | null {
  const eslesenler = ayetler.filter((ayet) => ayet.duygular.includes(duyguSlug));

  if (eslesenler.length === 0) {
    return null;
  }

  const rastgeleIndex = Math.floor(Math.random() * eslesenler.length);
  return eslesenler[rastgeleIndex];
}
