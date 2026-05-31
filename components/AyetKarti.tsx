"use client";

import { GeriBildirim } from "@/components/GeriBildirim";
import { TEMA } from "@/constants/tema";
import type { Ayet } from "@/types";

interface AyetKartiProps {
  ayet: Ayet;
  duyguSlug: string;
  duyguLabel: string;
  yenilenebilir: boolean;
  onBack: () => void;
  onYenile: () => void;
}

function YenileIkonu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

export function AyetKarti({
  ayet,
  duyguSlug,
  duyguLabel,
  yenilenebilir,
  onBack,
  onYenile,
}: AyetKartiProps) {
  return (
    <div className="ayet-giris">
      <button
        type="button"
        onClick={onBack}
        className={`-ml-2 mb-5 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium transition-colors ${TEMA.geriLink}`}
      >
        ← Geri
      </button>

      <article
        className={`relative rounded-2xl border px-4 py-6 sm:px-6 sm:py-8 ${TEMA.kart}`}
      >
        {yenilenebilir && (
          <button
            type="button"
            onClick={onYenile}
            aria-label="Başka bir ayet göster"
            className={`absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${TEMA.ikincilButon}`}
          >
            <YenileIkonu />
          </button>
        )}

        <div
          key={ayet.id}
          className={`ayet-yenile ${yenilenebilir ? "pt-8 sm:pt-4" : ""}`}
        >
          <p
            dir="rtl"
            lang="ar"
            className={`text-balance text-center text-xl leading-[1.9] break-words sm:text-2xl sm:leading-loose ${TEMA.baslik}`}
          >
            {ayet.arapca}
          </p>

          <p
            className={`mt-6 text-balance text-center text-base leading-relaxed break-words sm:mt-8 sm:text-lg ${TEMA.altMetin}`}
          >
            {ayet.meal}
          </p>

          <div className={`mt-6 space-y-3 border-t pt-5 sm:mt-8 sm:pt-6 ${TEMA.ayirici}`}>
            <p className={`text-balance text-xs leading-relaxed ${TEMA.solukMetin}`}>
              {ayet.meal_kaynagi}
            </p>
            <p className={`text-balance text-sm leading-relaxed break-words ${TEMA.altMetin}`}>
              {ayet.tefekkur_notu}
            </p>
          </div>
        </div>
      </article>

      <GeriBildirim
        key={`${ayet.id}-${duyguSlug}`}
        ayetId={ayet.id}
        duyguSlug={duyguSlug}
        duyguLabel={duyguLabel}
      />
    </div>
  );
}
