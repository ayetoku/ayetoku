export type DuyguKategori = "agir" | "pozitif";

export const DUYGU_SECENEKLERI = [
  { label: "Kaygılı", slug: "kaygi", kategori: "agir" },
  { label: "Şükran dolu", slug: "sukran", kategori: "agir" },
  { label: "Yorgun", slug: "yorgun", kategori: "agir" },
  { label: "Kararsız", slug: "kararsiz", kategori: "agir" },
  { label: "Üzgün", slug: "uzgun", kategori: "agir" },
  { label: "Huzur arayan", slug: "huzur", kategori: "agir" },
  { label: "Mutlu", slug: "mutlu", kategori: "pozitif" },
  { label: "Umutlu", slug: "umutlu", kategori: "pozitif" },
  { label: "Minnettar", slug: "minnettar", kategori: "pozitif" },
  { label: "Huzurlu", slug: "huzurlu", kategori: "pozitif" },
] as const;

export type DuyguSlug = (typeof DUYGU_SECENEKLERI)[number]["slug"];

/**
 * ayetler.json içindeki `duygular` dizisinde kullanılabilecek etiketler.
 * Yeni ayet eklerken slug'ları küçük harf ve Türkçe karaktersiz yaz (ör. "üzgün" değil "uzgun").
 */
export const DUYGU_ETIKETLERI: readonly DuyguSlug[] = DUYGU_SECENEKLERI.map(
  (d) => d.slug,
);

export const DUYGU_GRUPLARI = [
  {
    baslik: "Zorlayıcı hisler",
    kategori: "agir" as const,
  },
  {
    baslik: "Olumlu hisler",
    kategori: "pozitif" as const,
  },
];
