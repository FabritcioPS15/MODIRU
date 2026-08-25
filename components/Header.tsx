'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/contacto', label: 'Contacto' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative text-white/80 hover:text-[#eab308] transition-colors duration-300 py-1"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#eab308] transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white border-b transition-all duration-500 ease-out ${
        scrolled
          ? 'border-white/10 bg-black/80 backdrop-blur-2xl shadow-lg shadow-black/20'
          : 'border-white/5 bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-widest text-white">MODIRU</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/proyectos" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-[#eab308]/50 bg-white/5 hover:bg-[#eab308]/10 px-5 py-2 rounded-lg transition-all duration-300">
            Ver proyectos <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contacto">
            <button className="bg-gradient-to-r from-[#eab308] to-[#f59e0b] text-black font-semibold px-6 py-2 rounded-lg hidden md:inline-flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-105 transition-all duration-300">
              Cotizar ahora <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
