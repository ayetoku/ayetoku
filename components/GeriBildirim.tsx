"use client";

import { useState } from "react";
import { TEMA } from "@/constants/tema";
import { kaydetGeriBildirim } from "@/lib/geriBildirim";
import type { GeriBildirimYanit } from "@/types";

interface GeriBildirimProps {
  ayetId: number;
  duyguSlug: string;
  duyguLabel: string;
}

export function GeriBildirim({
  ayetId,
  duyguSlug,
  duyguLabel,
}: GeriBildirimProps) {
  const [tesekkurGoster, setTesekkurGoster] = useState(false);

  function handleYanit(yanit: GeriBildirimYanit) {
    kaydetGeriBildirim({ ayetId, duyguSlug, duyguLabel, yanit });
    setTesekkurGoster(true);
  }

  if (tesekkurGoster) {
    return (
      <p className={`mt-6 text-center text-sm ${TEMA.solukMetin}`}>
        Geri bildirimin için teşekkürler.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <p className={`text-center text-sm font-medium ${TEMA.baslik}`}>
        Bu sana iyi geldi mi?
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => handleYanit("evet")}
          className={`flex min-h-12 flex-1 items-center justify-center rounded-xl px-4 py-3.5 text-base font-medium transition-colors sm:text-sm ${TEMA.birincilButon}`}
        >
          Evet
        </button>
        <button
          type="button"
          onClick={() => handleYanit("hayir")}
          className={`flex min-h-12 flex-1 items-center justify-center rounded-xl border px-4 py-3.5 text-base font-medium transition-colors sm:text-sm ${TEMA.ikincilButon}`}
        >
          Hayır
        </button>
      </div>
    </div>
  );
}
