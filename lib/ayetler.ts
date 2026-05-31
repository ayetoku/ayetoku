import ayetlerData from "@/data/ayetler.json";
import type { Ayet } from "@/types";

const ayetler = ayetlerData as Ayet[];

export function getGununAyeti(): Ayet {
  return ayetler[0];
}

export function getRandomAyetByDuygu(
  duyguSlug: string,
  haricTutulanIdler: number[] = [],
): Ayet | null {
  const tumEslesenler = ayetler.filter((ayet) =>
    ayet.duygular.includes(duyguSlug),
  );

  if (tumEslesenler.length === 0) {
    return null;
  }

  const alternatifler = tumEslesenler.filter(
    (ayet) => !haricTutulanIdler.includes(ayet.id),
  );

  const havuz = alternatifler.length > 0 ? alternatifler : tumEslesenler;
  const rastgeleIndex = Math.floor(Math.random() * havuz.length);
  return havuz[rastgeleIndex];
}

export function countAyetsByDuygu(duyguSlug: string): number {
  return ayetler.filter((ayet) => ayet.duygular.includes(duyguSlug)).length;
}
