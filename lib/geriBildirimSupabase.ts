import { createSupabaseClient } from "@/lib/supabase";
import type { Ayet } from "@/types";

export function formatAyetBilgisi(ayet: Ayet, duyguLabel: string): string {
  return [
    `${ayet.sure_adi} ${ayet.ayet_no}`,
    `Duygu: ${duyguLabel}`,
    `Meal: ${ayet.meal}`,
    `Kaynak: ${ayet.meal_kaynagi}`,
  ].join(" | ");
}

export async function kaydetSupabaseGeriBildirim(input: {
  ayetBilgisi: string;
  evetHayir: "evet" | "hayir";
  notMetni?: string;
}): Promise<{ ok: true } | { ok: false; mesaj: string }> {
  try {
    const supabase = createSupabaseClient();

    const { error } = await supabase.from("geri_bildirimler").insert({
      ayet_bilgisi: input.ayetBilgisi,
      evet_hayir: input.evetHayir,
      not_metni: input.notMetni?.trim() || null,
    });

    if (error) {
      return { ok: false, mesaj: error.message };
    }

    return { ok: true };
  } catch {
    return { ok: false, mesaj: "Baglanti kurulamadi." };
  }
}
