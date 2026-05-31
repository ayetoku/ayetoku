import Link from "next/link";
import { TEMA } from "@/constants/tema";

export function FavorilerLink() {
  return (
    <Link
      href="/favoriler"
      className={`inline-flex min-h-11 items-center text-sm font-medium transition-colors ${TEMA.geriLink}`}
    >
      Favorilerim
    </Link>
  );
}
