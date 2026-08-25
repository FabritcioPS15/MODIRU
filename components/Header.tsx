import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111111] text-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-widest text-white">MODIRU</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-white hover:text-[#eab308] transition-colors relative">
            Inicio
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#eab308]"></span>
          </Link>
          <Link href="/nosotros" className="text-white/80 hover:text-[#eab308] transition-colors">
            Nosotros
          </Link>
          <Link href="/servicios" className="text-white/80 hover:text-[#eab308] transition-colors">
            Servicios
          </Link>
          <Link href="/proyectos" className="text-white/80 hover:text-[#eab308] transition-colors">
            Proyectos
          </Link>
          <Link href="/contacto" className="text-white/80 hover:text-[#eab308] transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contacto">
            <button className="bg-[#eab308] text-black hover:bg-[#d9a05b] font-medium px-6 py-2 rounded-md hidden md:inline-flex transition-colors">
              Solicitar cotización
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
