"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FavoriAyetKarti } from "@/components/FavoriAyetKarti";
import { TEMA } from "@/constants/tema";
import { favoriKaldir, getFavoriler } from "@/lib/favoriler";
import type { Ayet } from "@/types";

const SAYFA_STILI =
  "flex min-h-dvh w-full flex-1 flex-col items-center justify-start bg-[#F3EBE1] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] sm:px-6 sm:py-16";

export function FavorilerIcerik() {
  const [favoriler, setFavoriler] = useState<Ayet[]>([]);
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    setFavoriler(getFavoriler());
    setYuklendi(true);
  }, []);

  function handleKaldir(ayetId: number) {
    favoriKaldir(ayetId);
    setFavoriler(getFavoriler());
  }

  return (
    <main className={SAYFA_STILI}>
      <div className="w-full min-w-0 max-w-md">
        <Link
          href="/"
          className={`-ml-2 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium transition-colors ${TEMA.geriLink}`}
        >
          ← Ana sayfa
        </Link>

        <h1
          className={`mt-4 text-balance text-2xl font-light leading-snug tracking-tight sm:text-3xl ${TEMA.baslik}`}
        >
          Favorilerim
        </h1>

        {!yuklendi && (
          <p className={`mt-6 text-sm ${TEMA.solukMetin}`}>Yükleniyor...</p>
        )}

        {yuklendi && favoriler.length === 0 && (
          <div
            className={`mt-8 rounded-2xl border px-5 py-8 text-center sm:px-6 ${TEMA.kart}`}
          >
            <p className={`text-base leading-relaxed ${TEMA.altMetin}`}>
              Henüz bir ayet kaydetmedin. Sana iyi gelen ayetleri burada
              biriktirebilirsin.
            </p>
          </div>
        )}

        {favoriler.length > 0 && (
          <ul className="mt-8 flex flex-col gap-4">
            {favoriler.map((ayet) => (
              <li key={ayet.id}>
                <FavoriAyetKarti ayet={ayet} onKaldir={handleKaldir} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
