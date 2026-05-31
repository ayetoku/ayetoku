"use client";

import { useState } from "react";
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
      <p className="mt-6 text-center text-sm text-zinc-400">
        Geri bildirimin için teşekkürler.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-center text-sm font-medium text-zinc-300">
        Bu sana iyi geldi mi?
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => handleYanit("evet")}
          className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3.5 text-base font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800/80 active:bg-zinc-800 sm:text-sm"
        >
          Evet
        </button>
        <button
          type="button"
          onClick={() => handleYanit("hayir")}
          className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3.5 text-base font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800/80 active:bg-zinc-800 sm:text-sm"
        >
          Hayır
        </button>
      </div>
    </div>
  );
}
