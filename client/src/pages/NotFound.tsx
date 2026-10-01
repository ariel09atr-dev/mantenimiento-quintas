import { ArrowLeft, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="site-shell min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        <AlertCircle className="mx-auto mb-6 text-[#244b40]" size={42} strokeWidth={1.3} />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#365149]">Página no encontrada</p>
        <h1 className="mb-5 font-serif text-5xl tracking-[-0.05em] text-[#18312b]">Este camino no existe.</h1>
        <p className="mb-8 text-[#365149]">La página que busca no está disponible o fue trasladada.</p>
        <button
          className="inline-flex items-center gap-2 border-b border-[#244b40] pb-1 text-sm font-semibold text-[#244b40]"
          onClick={() => setLocation("/")}
        >
          <ArrowLeft size={16} strokeWidth={1.7} />
          Volver al inicio
        </button>
      </section>
    </main>
  );
}
