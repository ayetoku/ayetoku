import { GeriBildirim } from "@/components/GeriBildirim";
import type { Ayet } from "@/types";

interface AyetKartiProps {
  ayet: Ayet;
  duyguSlug: string;
  duyguLabel: string;
  onBack: () => void;
}

export function AyetKarti({ ayet, duyguSlug, duyguLabel, onBack }: AyetKartiProps) {
  return (
    <div className="ayet-giris">
      <button
        type="button"
        onClick={onBack}
        className="-ml-2 mb-5 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 active:text-zinc-200"
      >
        ← Geri
      </button>

      <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-6 sm:px-6 sm:py-8">
        <p
          dir="rtl"
          lang="ar"
          className="text-balance text-center text-xl leading-[1.9] break-words text-zinc-50 sm:text-2xl sm:leading-loose"
        >
          {ayet.arapca}
        </p>

        <p className="mt-6 text-balance text-center text-base leading-relaxed break-words text-zinc-200 sm:mt-8 sm:text-lg">
          {ayet.meal}
        </p>

        <div className="mt-6 space-y-3 border-t border-zinc-800 pt-5 sm:mt-8 sm:pt-6">
          <p className="text-balance text-xs leading-relaxed text-zinc-500">
            {ayet.meal_kaynagi}
          </p>
          <p className="text-balance text-sm leading-relaxed break-words text-zinc-400">
            {ayet.tefekkur_notu}
          </p>
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
