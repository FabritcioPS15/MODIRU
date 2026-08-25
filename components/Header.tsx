'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        className={`w-full text-white border-b transition-all duration-500 ease-out ${
          scrolled
            ? 'border-white/10 bg-black/80 backdrop-blur-2xl shadow-lg shadow-black/20'
            : mobileOpen
              ? 'border-white/10 bg-black/80 backdrop-blur-2xl'
              : 'border-white/5 bg-[#111111]/80 backdrop-blur-sm'
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
          <div className="hidden md:flex items-center gap-3">
            <Link href="/proyectos" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-[#eab308]/50 bg-white/5 hover:bg-[#eab308]/10 px-5 py-2 rounded-lg transition-all duration-300">
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contacto">
              <button className="bg-gradient-to-r from-[#eab308] to-[#f59e0b] text-black font-semibold px-6 py-2 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:scale-105 transition-all duration-300">
                Cotizar ahora <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden w-full bg-[#111111]/95 backdrop-blur-2xl border-b border-white/10"
          >
            <nav className="flex flex-col items-center gap-1 py-4 px-4 container mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center text-white/80 hover:text-[#eab308] hover:bg-white/5 text-base font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.2 }}
                className="flex flex-col gap-3 w-full mt-3 pt-3 border-t border-white/10"
              >
                <Link
                  href="/proyectos"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-[#eab308]/50 bg-white/5 hover:bg-[#eab308]/10 px-5 py-3 rounded-lg transition-all duration-300"
                >
                  Ver proyectos <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#eab308] to-[#f59e0b] text-black font-semibold px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.25)] transition-all duration-300"
                >
                  Cotizar ahora <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
