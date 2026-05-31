import { AnaSayfaIcerik } from "@/components/AnaSayfaIcerik";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full flex-1 flex-col items-center justify-start bg-zinc-950 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] sm:justify-center sm:px-6 sm:py-16">
      <AnaSayfaIcerik />
    </main>
  );
}
