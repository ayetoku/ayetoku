export const DUYGU_SECENEKLERI = [
  { label: "Kaygılı", slug: "kaygi" },
  { label: "Şükran dolu", slug: "sukran" },
  { label: "Yorgun", slug: "yorgun" },
  { label: "Kararsız", slug: "kararsiz" },
  { label: "Üzgün", slug: "uzgun" },
  { label: "Huzur arayan", slug: "huzur" },
] as const;

export type DuyguSlug = (typeof DUYGU_SECENEKLERI)[number]["slug"];
