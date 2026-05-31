import {
  DUYGU_GRUPLARI,
  DUYGU_SECENEKLERI,
  type DuyguKategori,
} from "@/constants/duygular";
import { TEMA } from "@/constants/tema";

interface DuyguSecimiProps {
  onSelect: (label: string, slug: string) => void;
}

const BUTON_STILLERI: Record<DuyguKategori, string> = {
  agir: TEMA.ikincilButon,
  pozitif: TEMA.pozitifButon,
};

function DuyguGrubu({
  kategori,
  onSelect,
}: {
  kategori: DuyguKategori;
  onSelect: (label: string, slug: string) => void;
}) {
  const duygular = DUYGU_SECENEKLERI.filter((d) => d.kategori === kategori);

  return (
    <ul className="grid grid-cols-2 gap-3">
      {duygular.map(({ label, slug }) => (
        <li
          key={slug}
          className={label.length > 10 ? "col-span-2" : undefined}
        >
          <button
            type="button"
            onClick={() => onSelect(label, slug)}
            className={`flex min-h-12 w-full items-center justify-center rounded-2xl border px-4 py-3.5 text-center text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98A4B]/50 sm:text-base ${BUTON_STILLERI[kategori]}`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function DuyguSecimi({ onSelect }: DuyguSecimiProps) {
  return (
    <div className="mt-8 space-y-6">
      {DUYGU_GRUPLARI.map((grup, index) => (
        <section key={grup.kategori}>
          {index > 0 && (
            <div className={`mb-6 border-t ${TEMA.ayirici}`} />
          )}
          <p
            className={`mb-3 text-xs font-medium uppercase tracking-[0.15em] ${TEMA.solukMetin}`}
          >
            {grup.baslik}
          </p>
          <DuyguGrubu kategori={grup.kategori} onSelect={onSelect} />
        </section>
      ))}
    </div>
  );
}
