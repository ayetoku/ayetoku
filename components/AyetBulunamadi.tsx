import { TEMA } from "@/constants/tema";

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
        className={`-ml-2 mb-5 inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium transition-colors ${TEMA.geriLink}`}
      >
        ← Geri
      </button>

      <article
        className={`rounded-2xl border px-4 py-6 text-center sm:px-6 sm:py-8 ${TEMA.kart}`}
      >
        <p
          className={`text-balance text-base leading-relaxed break-words sm:text-lg ${TEMA.baslik}`}
        >
          &ldquo;{duyguLabel}&rdquo; duygusu için henüz ayet eklenmemiş.
        </p>
        <p className={`mt-3 text-balance text-sm leading-relaxed ${TEMA.solukMetin}`}>
          Başka bir duygu seçebilir veya daha sonra tekrar deneyebilirsin.
        </p>
      </article>
    </div>
  );
}
