"use client";

import { useState } from "react";
import { TEMA } from "@/constants/tema";
import {
  formatAyetBilgisi,
  kaydetSupabaseGeriBildirim,
} from "@/lib/geriBildirimSupabase";
import type { Ayet } from "@/types";

const NOT_LIMIT = 1000;

interface GeriBildirimProps {
  ayet: Ayet;
  duyguLabel: string;
}

type GeriBildirimAsama = "soru" | "hayir_not" | "tesekkur";

export function GeriBildirim({ ayet, duyguLabel }: GeriBildirimProps) {
  const [asama, setAsama] = useState<GeriBildirimAsama>("soru");
  const [notMetni, setNotMetni] = useState("");
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState<string | null>(null);

  const ayetBilgisi = formatAyetBilgisi(ayet, duyguLabel);

  async function kaydet(
    evetHayir: "evet" | "hayir",
    not?: string,
  ): Promise<boolean> {
    setGonderiliyor(true);
    setHata(null);

    const sonuc = await kaydetSupabaseGeriBildirim({
      ayetBilgisi,
      evetHayir,
      notMetni: not,
    });

    setGonderiliyor(false);

    if (!sonuc.ok) {
      setHata(sonuc.mesaj);
      return false;
    }

    return true;
  }

  function handleHayir() {
    setHata(null);
    setAsama("hayir_not");
  }

  async function handleEvet() {
    const basarili = await kaydet("evet");
    if (basarili) {
      setAsama("tesekkur");
    }
  }

  async function handleGonder() {
    const basarili = await kaydet("hayir", notMetni);
    if (basarili) {
      setAsama("tesekkur");
    }
  }

  if (asama === "tesekkur") {
    return (
      <p className={`mt-6 text-center text-sm ${TEMA.solukMetin}`}>
        Geri bildirimin için teşekkürler.
      </p>
    );
  }

  if (asama === "hayir_not") {
    return (
      <div className="mt-6">
        <p className={`text-center text-sm font-medium ${TEMA.baslik}`}>
          Bu sana iyi geldi mi?
        </p>
        <p className={`mt-2 text-center text-sm ${TEMA.altMetin}`}>
          İstersen kısaca paylaş — ne eksik kaldı?
        </p>

        <div className="mt-4">
          <textarea
            value={notMetni}
            onChange={(e) => setNotMetni(e.target.value.slice(0, NOT_LIMIT))}
            maxLength={NOT_LIMIT}
            rows={4}
            disabled={gonderiliyor}
            placeholder="Düşünceni buraya yaz..."
            className={`w-full resize-none rounded-2xl border px-4 py-3 text-base leading-relaxed ${TEMA.baslik} placeholder:text-[#5C3D22]/35 focus:border-[#C98A4B]/50 focus:outline-none focus:ring-2 focus:ring-[#C98A4B]/20 disabled:opacity-60 ${TEMA.kart}`}
          />
          <p className={`mt-2 text-right text-xs ${TEMA.solukMetin}`}>
            {notMetni.length}/{NOT_LIMIT}
          </p>
        </div>

        {hata && (
          <p className="mt-2 text-center text-sm text-red-700/80">{hata}</p>
        )}

        <button
          type="button"
          onClick={handleGonder}
          disabled={gonderiliyor}
          className={`mt-3 flex min-h-12 w-full items-center justify-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors disabled:opacity-60 ${TEMA.birincilButon}`}
        >
          {gonderiliyor ? "Gönderiliyor..." : "Gönder"}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className={`text-center text-sm font-medium ${TEMA.baslik}`}>
        Bu sana iyi geldi mi?
      </p>

      {hata && (
        <p className="mt-2 text-center text-sm text-red-700/80">{hata}</p>
      )}

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={handleEvet}
          disabled={gonderiliyor}
          className={`flex min-h-12 flex-1 items-center justify-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors disabled:opacity-60 sm:text-sm ${TEMA.birincilButon}`}
        >
          {gonderiliyor ? "..." : "Evet"}
        </button>
        <button
          type="button"
          onClick={handleHayir}
          disabled={gonderiliyor}
          className={`flex min-h-12 flex-1 items-center justify-center rounded-xl border px-4 py-3.5 text-base font-medium transition-colors disabled:opacity-60 sm:text-sm ${TEMA.ikincilButon}`}
        >
          Hayır
        </button>
      </div>
    </div>
  );
}
