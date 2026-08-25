import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white/80 py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-widest text-white">MODIRU</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs mt-4">
              Diseñamos, fabricamos e instalamos mobiliario a medida en madera y melamina para hogares,
              oficinas y espacios comerciales. Diseño, calidad y precisión en cada detalle.
            </p>
          </div>

          <div>
            <h3 className="text-[#eab308] font-semibold mb-4 text-sm tracking-wider uppercase">Enlaces rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#eab308] transition-colors flex items-center gap-2"><span className="text-[#eab308]">&gt;</span> Inicio</Link></li>
              <li><Link href="/nosotros" className="hover:text-[#eab308] transition-colors flex items-center gap-2"><span className="text-[#eab308]">&gt;</span> Nosotros</Link></li>
              <li><Link href="/servicios" className="hover:text-[#eab308] transition-colors flex items-center gap-2"><span className="text-[#eab308]">&gt;</span> Servicios</Link></li>
              <li><Link href="/proyectos" className="hover:text-[#eab308] transition-colors flex items-center gap-2"><span className="text-[#eab308]">&gt;</span> Proyectos</Link></li>
              <li><Link href="/contacto" className="hover:text-[#eab308] transition-colors flex items-center gap-2"><span className="text-[#eab308]">&gt;</span> Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[#eab308] font-semibold mb-4 text-sm tracking-wider uppercase">Contáctanos</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-[#eab308] font-semibold w-24">WhatsApp:</span>
                <span>+51 987 654 321</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#eab308] font-semibold w-24">Teléfono:</span>
                <span>(01) 234 5678</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#eab308] font-semibold w-24">Correo:</span>
                <span>hola@modiru.pe</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#eab308] font-semibold w-24">Dirección:</span>
                <span>Av. Javier Prado Este 1234, San Isidro, Lima, Perú</span>
              </li>
              <li className="flex gap-3 mt-4">
                <span className="text-[#eab308] font-semibold w-24">Horario de atención:</span>
                <div>
                  <p>Lunes a Viernes: 9:00 am – 6:00 pm</p>
                  <p>Sábados: 9:00 am – 1:00 pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2024 MODIRU. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#eab308] hover:text-[#eab308] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#eab308]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#eab308] hover:text-[#eab308] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#eab308]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#eab308] hover:text-[#eab308] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#eab308]"><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/><circle cx="12" cy="12" r="10"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#eab308] hover:text-[#eab308] transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#eab308]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

