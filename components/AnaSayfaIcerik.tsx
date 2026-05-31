"use client";

import { useState } from "react";
import { AyetBulunamadi } from "@/components/AyetBulunamadi";
import { AyetKarti } from "@/components/AyetKarti";
import { DuyguSecimi } from "@/components/DuyguSecimi";
import { KarsilamaEkrani } from "@/components/KarsilamaEkrani";
import {
  countAyetsByDuygu,
  getGununAyeti,
  getRandomAyetByDuygu,
} from "@/lib/ayetler";
import type { Ayet } from "@/types";

type Gorunum =
  | { tur: "karsilama" }
  | { tur: "secim" }
  | { tur: "ayet"; duyguLabel: string; duyguSlug: string; ayet: Ayet }
  | { tur: "bos"; duyguLabel: string };

const gununAyet = getGununAyeti();

const SAYFA_STILI =
  "flex min-h-dvh w-full flex-1 flex-col items-center justify-start bg-[#F3EBE1] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] sm:justify-center sm:px-6 sm:py-16";

export function AnaSayfaIcerik() {
  const [gorunum, setGorunum] = useState<Gorunum>({ tur: "karsilama" });

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

  function handleAyetYenile() {
    if (gorunum.tur !== "ayet") {
      return;
    }

    const yeniAyet = getRandomAyetByDuygu(gorunum.duyguSlug, [gorunum.ayet.id]);

    if (yeniAyet) {
      setGorunum({ ...gorunum, ayet: yeniAyet });
    }
  }

  return (
    <main className={SAYFA_STILI}>
      <div className="w-full min-w-0 max-w-md">
        {gorunum.tur === "karsilama" && (
          <KarsilamaEkrani
            gununAyet={gununAyet}
            onBasla={() => setGorunum({ tur: "secim" })}
          />
        )}

        {gorunum.tur === "secim" && (
          <div className="karsilama-giris">
            <h1 className="text-balance text-2xl font-light leading-snug tracking-tight text-[#5C3D22] sm:text-3xl">
              Bugün nasıl hissediyorsun?
            </h1>
            <DuyguSecimi onSelect={handleDuyguSec} />
          </div>
        )}

        {gorunum.tur === "ayet" && (
          <AyetKarti
            ayet={gorunum.ayet}
            duyguSlug={gorunum.duyguSlug}
            duyguLabel={gorunum.duyguLabel}
            yenilenebilir={countAyetsByDuygu(gorunum.duyguSlug) > 1}
            onBack={handleGeri}
            onYenile={handleAyetYenile}
          />
        )}

        {gorunum.tur === "bos" && (
          <AyetBulunamadi
            duyguLabel={gorunum.duyguLabel}
            onBack={handleGeri}
          />
        )}
      </div>
    </main>
  );
}
