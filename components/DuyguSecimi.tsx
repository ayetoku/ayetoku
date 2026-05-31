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

const BUTON_BOYUTU =
  "flex h-full min-h-[4.5rem] w-full items-center justify-center rounded-2xl border px-3 py-3 text-center text-sm font-medium leading-snug tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C98A4B]/50";

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
        <li key={slug} className="flex">
          <button
            type="button"
            onClick={() => onSelect(label, slug)}
            className={`${BUTON_BOYUTU} ${BUTON_STILLERI[kategori]}`}
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
    <div className="mt-8 space-y-8">
      {DUYGU_GRUPLARI.map((grup, index) => (
        <section key={grup.kategori}>
          {index > 0 && (
            <div className={`mb-8 border-t ${TEMA.ayirici}`} />
          )}
          <p
            className={`mb-4 text-xs font-medium uppercase tracking-[0.15em] ${TEMA.solukMetin}`}
          >
            {grup.baslik}
          </p>
          <DuyguGrubu kategori={grup.kategori} onSelect={onSelect} />
        </section>
      ))}
    </div>
  );
}
