"use client";

import { useState } from "react";
import { AyetBulunamadi } from "@/components/AyetBulunamadi";
import { AyetKarti } from "@/components/AyetKarti";
import { DuyguSecimi } from "@/components/DuyguSecimi";
import { getRandomAyetByDuygu } from "@/lib/ayetler";
import type { Ayet } from "@/types";

type Gorunum =
  | { tur: "secim" }
  | { tur: "ayet"; duyguLabel: string; duyguSlug: string; ayet: Ayet }
  | { tur: "bos"; duyguLabel: string };

export function AnaSayfaIcerik() {
  const [gorunum, setGorunum] = useState<Gorunum>({ tur: "secim" });

  function handleDuyguSec(duyguLabel: string, duyguSlug: string) {
    const ayet = getRandomAyetByDuygu(duyguSlug);

    if (ayet) {
      setGorunum({ tur: "ayet", duyguLabel, duyguSlug, ayet });
      return;
    }

    setGorunum({ tur: "bos", duyguLabel });
  }

  function handleGeri() {
    setGorunum({ tur: "secim" });
  }

  return (
    <div className="w-full min-w-0 max-w-md">
      {gorunum.tur === "secim" && (
        <>
          <h1 className="text-balance text-2xl font-light leading-snug tracking-tight text-zinc-50 sm:text-3xl">
            Bugün nasıl hissediyorsun?
          </h1>
          <DuyguSecimi onSelect={handleDuyguSec} />
        </>
      )}

      {gorunum.tur === "ayet" && (
        <AyetKarti
          key={gorunum.ayet.id}
          ayet={gorunum.ayet}
          duyguSlug={gorunum.duyguSlug}
          duyguLabel={gorunum.duyguLabel}
          onBack={handleGeri}
        />
      )}

      {gorunum.tur === "bos" && (
        <AyetBulunamadi duyguLabel={gorunum.duyguLabel} onBack={handleGeri} />
      )}
    </div>
  );
}
