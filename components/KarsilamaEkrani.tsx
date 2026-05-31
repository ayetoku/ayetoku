import type { Ayet } from "@/types";
import { FavorilerLink } from "@/components/FavorilerLink";

interface KarsilamaEkraniProps {
  gununAyet: Ayet;
  onBasla: () => void;
}

function KitapIkonu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path d="M12 6.5v13" />
      <path d="M6.5 4.5A2.5 2.5 0 0 1 9 7h6a2.5 2.5 0 0 1 2.5-2.5V18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4.5Z" />
    </svg>
  );
}

export function KarsilamaEkrani({ gununAyet, onBasla }: KarsilamaEkraniProps) {
  return (
    <div className="karsilama-giris flex w-full flex-col items-center text-center">
      <div className="mb-1 flex w-full justify-end">
        <FavorilerLink />
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C98A4B]/25 bg-[#C98A4B]/10 text-[#C98A4B]">
        <KitapIkonu />
      </div>

      <h1 className="font-serif mt-6 text-4xl font-medium tracking-tight text-[#5C3D22] sm:text-5xl">
        Ayetoku
      </h1>

      <p className="mt-3 max-w-xs text-balance text-base leading-relaxed text-[#5C3D22]/75 sm:max-w-sm">
        Kalbinin haline göre bir ayet. Ne hissedersen, ona uygun bir söz.
      </p>

      <article className="mt-8 w-full rounded-2xl border border-[#C98A4B]/20 bg-white/60 px-5 py-6 shadow-sm sm:px-6 sm:py-7">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#C98A4B]">
          BUGÜNÜN AYETİ
        </p>

        <p
          dir="rtl"
          lang="ar"
          className="mt-4 text-balance text-xl leading-[1.9] break-words text-[#5C3D22] sm:text-2xl"
        >
          {gununAyet.arapca}
        </p>

        <p className="mt-4 text-balance text-base leading-relaxed break-words text-[#5C3D22]/90">
          {gununAyet.meal}
        </p>

        <p className="mt-4 text-xs leading-relaxed text-[#5C3D22]/55">
          {gununAyet.sure_adi} · {gununAyet.ayet_no} · {gununAyet.meal_kaynagi}
        </p>
      </article>

      <button
        type="button"
        onClick={onBasla}
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#C98A4B] px-6 text-lg font-medium text-white shadow-md transition-colors hover:bg-[#b87a3f] active:bg-[#a66d36]"
      >
        Başla
      </button>
    </div>
  );
}
