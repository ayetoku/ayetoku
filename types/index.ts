export interface Ayet {
  id: number;
  sure_adi: string;
  ayet_no: number;
  arapca: string;
  meal: string;
  meal_kaynagi: string;
  duygular: string[];
  baglam?: string[];
  tefekkur_notu: string;
}

export type GeriBildirimYanit = "evet" | "hayir";

export interface GeriBildirimKaydi {
  id: string;
  ayetId: number;
  duyguSlug: string;
  duyguLabel: string;
  yanit: GeriBildirimYanit;
  tarih: string;
}
