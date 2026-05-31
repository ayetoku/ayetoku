import type { GeriBildirimKaydi, GeriBildirimYanit } from "@/types";

const STORAGE_KEY = "ayetoku-geri-bildirim";

function storageAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getGeriBildirimler(): GeriBildirimKaydi[] {
  if (!storageAvailable()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as GeriBildirimKaydi[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function kaydetGeriBildirim(input: {
  ayetId: number;
  duyguSlug: string;
  duyguLabel: string;
  yanit: GeriBildirimYanit;
}): GeriBildirimKaydi | null {
  if (!storageAvailable()) {
    return null;
  }

  const kayit: GeriBildirimKaydi = {
    id: crypto.randomUUID(),
    ayetId: input.ayetId,
    duyguSlug: input.duyguSlug,
    duyguLabel: input.duyguLabel,
    yanit: input.yanit,
    tarih: new Date().toISOString(),
  };

  const mevcut = getGeriBildirimler();
  mevcut.push(kayit);

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mevcut));
    return kayit;
  } catch {
    return null;
  }
}
