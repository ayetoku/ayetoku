import type { Ayet } from "@/types";

const STORAGE_KEY = "ayetoku-favoriler";

function storageAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getFavoriler(): Ayet[] {
  if (!storageAvailable()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as Ayet[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function isFavori(ayetId: number): boolean {
  return getFavoriler().some((ayet) => ayet.id === ayetId);
}

function kaydetFavoriler(favoriler: Ayet[]): void {
  if (!storageAvailable()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriler));
}

/** Favoriye ekler veya çıkarır. Sonuç: true = kayıtlı, false = çıkarıldı */
export function toggleFavori(ayet: Ayet): boolean {
  const favoriler = getFavoriler();
  const index = favoriler.findIndex((f) => f.id === ayet.id);

  if (index >= 0) {
    favoriler.splice(index, 1);
    kaydetFavoriler(favoriler);
    return false;
  }

  favoriler.push(ayet);
  kaydetFavoriler(favoriler);
  return true;
}

export function favoriKaldir(ayetId: number): void {
  const favoriler = getFavoriler().filter((f) => f.id !== ayetId);
  kaydetFavoriler(favoriler);
}
