interface AyetBulunamadiProps {
  duyguLabel: string;
  onBack: () => void;
}

export function AyetBulunamadi({ duyguLabel, onBack }: AyetBulunamadiProps) {
  return (
    <div className="ayet-giris">
      <button
        type="button"
        onClick={onBack}
        className="-ml-2 mb-5 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 active:text-zinc-200"
      >
        ← Geri
      </button>

      <article className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-6 text-center sm:px-6 sm:py-8">
        <p className="text-balance text-base leading-relaxed break-words text-zinc-300 sm:text-lg">
          &ldquo;{duyguLabel}&rdquo; duygusu için henüz ayet eklenmemiş.
        </p>
        <p className="mt-3 text-balance text-sm leading-relaxed text-zinc-500">
          Başka bir duygu seçebilir veya daha sonra tekrar deneyebilirsin.
        </p>
      </article>
    </div>
  );
}
