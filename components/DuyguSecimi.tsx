import { DUYGU_SECENEKLERI } from "@/constants/duygular";

interface DuyguSecimiProps {
  onSelect: (label: string, slug: string) => void;
}

export function DuyguSecimi({ onSelect }: DuyguSecimiProps) {
  return (
    <ul className="mt-8 flex flex-col gap-3">
      {DUYGU_SECENEKLERI.map(({ label, slug }) => (
        <li key={slug}>
          <button
            type="button"
            onClick={() => onSelect(label, slug)}
            className="flex min-h-12 w-full items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 text-left text-base font-medium tracking-wide text-zinc-100 transition-colors hover:border-zinc-600 hover:bg-zinc-800/80 active:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
