"use client";

import { TEMA } from "@/constants/tema";
import { favoriKaldir } from "@/lib/favoriler";
import type { Ayet } from "@/types";

interface FavoriAyetKartiProps {
  ayet: Ayet;
  onKaldir: (ayetId: number) => void;
}

export function FavoriAyetKarti({ ayet, onKaldir }: FavoriAyetKartiProps) {
  return (
    <article className={`rounded-2xl border px-4 py-6 sm:px-6 sm:py-7 ${TEMA.kart}`}>
      <div className="flex items-start justify-between gap-3">
        <p className={`text-xs font-medium tracking-wide ${TEMA.solukMetin}`}>
          {ayet.sure_adi} · {ayet.ayet_no}
        </p>
        <button
          type="button"
          onClick={() => onKaldir(ayet.id)}
          className={`shrink-0 rounded-lg px-2 py-1 text-xs font-medium transition-colors ${TEMA.geriLink}`}
        >
          Kaldır
        </button>
      </div>

      <p
        dir="rtl"
        lang="ar"
        className={`mt-4 text-balance text-center text-xl leading-[1.9] break-words sm:text-2xl ${TEMA.baslik}`}
      >
        {ayet.arapca}
      </p>

      <p
        className={`mt-5 text-balance text-center text-base leading-relaxed break-words ${TEMA.altMetin}`}
      >
        {ayet.meal}
      </p>

      <div className={`mt-5 space-y-2 border-t pt-4 ${TEMA.ayirici}`}>
        <p className={`text-xs leading-relaxed ${TEMA.solukMetin}`}>
          {ayet.meal_kaynagi}
        </p>
        <p className={`text-sm leading-relaxed break-words ${TEMA.altMetin}`}>
          {ayet.tefekkur_notu}
        </p>
      </div>
    </article>
  );
}
