"use client";

import { GeriBildirim } from "@/components/GeriBildirim";
import { FavorilerLink } from "@/components/FavorilerLink";
import { TEMA } from "@/constants/tema";
import { isFavori, toggleFavori } from "@/lib/favoriler";
import type { Ayet } from "@/types";
import { useEffect, useState } from "react";

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

function KalpIkonu({ dolu }: { dolu: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={dolu ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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
  const [kayitli, setKayitli] = useState(false);

  useEffect(() => {
    setKayitli(isFavori(ayet.id));
  }, [ayet.id]);

  function handleKaydet() {
    const yeniDurum = toggleFavori(ayet);
    setKayitli(yeniDurum);
  }

  const ustBosluk = yenilenebilir ? "pt-10 sm:pt-6" : "pt-2";

  return (
    <div className="ayet-giris">
      <div className="mb-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className={`-ml-2 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium transition-colors ${TEMA.geriLink}`}
        >
          ← Geri
        </button>
        <FavorilerLink />
      </div>

      <article
        className={`relative rounded-2xl border px-4 py-6 sm:px-6 sm:py-8 ${TEMA.kart}`}
      >
        <button
          type="button"
          onClick={handleKaydet}
          aria-label={kayitli ? "Favorilerden çıkar" : "Favorilere kaydet"}
          aria-pressed={kayitli}
          className={`absolute top-3 left-3 flex min-h-10 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
            kayitli
              ? "border-[#C98A4B]/40 bg-[#C98A4B]/15 text-[#C98A4B]"
              : TEMA.ikincilButon
          }`}
        >
          <KalpIkonu dolu={kayitli} />
          {kayitli ? "Kaydedildi" : "Kaydet"}
        </button>

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

        <div key={ayet.id} className={`ayet-yenile ${ustBosluk}`}>
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

          <div
            className={`mt-6 space-y-3 border-t pt-5 sm:mt-8 sm:pt-6 ${TEMA.ayirici}`}
          >
            <p className={`text-balance text-xs leading-relaxed ${TEMA.solukMetin}`}>
              {ayet.meal_kaynagi}
            </p>
            <p
              className={`text-balance text-sm leading-relaxed break-words ${TEMA.altMetin}`}
            >
              {ayet.tefekkur_notu}
            </p>
          </div>
        </div>
      </article>

      <GeriBildirim
        key={`${ayet.id}-${duyguSlug}`}
        ayet={ayet}
        duyguLabel={duyguLabel}
      />
    </div>
  );
}
