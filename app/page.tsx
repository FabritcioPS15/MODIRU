'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X, Camera, Phone, Mail, MapPin } from 'lucide-react'

const projects = [
  { title: 'Cocina Línea', category: 'Cocinas integrales', image: '/modiru-showroom.png', className: 'md:col-span-7' },
  { title: 'Vestidor Nido', category: 'Dormitorios', image: '/modiru-showroom.png', className: 'md:col-span-5 md:mt-24' },
  { title: 'Estudio Abierto', category: 'Home office', image: '/modiru-showroom.png', className: 'md:col-span-5', position: 'object-[70%_60%]' },
  { title: 'Módulo Ocre', category: 'Mobiliario a medida', image: '/modiru-showroom.png', className: 'md:col-span-7 md:mt-24', position: 'object-[30%_70%]' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-30 px-6 py-6 md:px-12 md:py-8">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a href="#inicio" className="font-serif text-2xl tracking-[-0.06em] text-primary md:text-3xl">modiru<span className="text-accent">.</span></a>
          <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.18em] text-primary/75 md:flex">
            <a href="#proyectos" className="transition-colors hover:text-accent">Proyectos</a>
            <a href="#servicios" className="transition-colors hover:text-accent">Servicios</a>
            <a href="#estudio" className="transition-colors hover:text-accent">El estudio</a>
            <a href="#contacto" className="rounded-full border border-primary px-5 py-3 transition-colors hover:bg-primary hover:text-primary-foreground">Hablemos</a>
          </nav>
          <button aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && <nav className="mt-5 flex flex-col gap-5 border-t border-primary/15 bg-background px-2 pb-4 pt-6 text-sm uppercase tracking-widest md:hidden"><a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a><a href="#estudio" onClick={() => setMenuOpen(false)}>El estudio</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos</a></nav>}
      </header>

      <section id="inicio" className="relative flex min-h-[720px] items-end bg-secondary px-6 pb-14 pt-36 md:min-h-[820px] md:px-12 md:pb-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.22em] text-accent">Diseño & fabricación a medida</p>
            <h1 className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.065em] text-primary md:text-8xl lg:text-[9.5rem]">Diseñalos.<br /><span className="text-accent">Transformamos</span><br />tus espacios.</h1>
          </div>
          <div className="flex flex-col gap-7 md:mb-2 md:max-w-sm md:justify-self-end">
            <p className="text-base leading-7 text-primary/70 md:text-lg">Mobiliario en melamina que convierte tus ideas en lugares para vivir mejor. Pensado para ti, construido para durar.</p>
            <a href="#contacto" className="group flex w-fit items-center gap-3 border-b border-primary pb-2 text-sm uppercase tracking-[0.16em] text-primary">Cuéntanos tu idea <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"><p className="text-xs uppercase tracking-[0.22em] text-accent">Lo que hacemos</p><p className="max-w-md text-lg leading-7 text-primary-foreground/65">Diseñamos con intención. Fabricamos con precisión. Instalamos para que todo encaje.</p></div>
          <div className="grid gap-px border-y border-primary-foreground/20 md:grid-cols-3">
            {[['01', 'Cocinas', 'El centro de tu casa, diseñado alrededor de tu forma de vivir.'], ['02', 'Dormitorios', 'Armarios y vestidores que hacen espacio para lo que importa.'], ['03', 'Ambientes', 'Muebles que ordenan, definen y le dan carácter a cada rincón.']].map(([n, title, desc]) => <article key={n} className="border-b border-primary-foreground/20 py-8 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0"><span className="font-mono text-xs text-accent">{n}</span><h2 className="mt-12 font-serif text-4xl tracking-[-0.04em]">{title}</h2><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/60">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-background px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]"><div className="mb-16 flex items-end justify-between"><div><p className="mb-5 text-xs uppercase tracking-[0.22em] text-accent">Una muestra de nuestro trabajo</p><h2 className="font-serif text-5xl tracking-[-0.06em] md:text-7xl">Espacios con<br /><i className="text-accent">intención.</i></h2></div><span className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">[ 04 proyectos ]</span></div><div className="grid gap-x-6 gap-y-16 md:grid-cols-12">{projects.map((project) => <a href="#contacto" key={project.title} className={`group ${project.className}`}><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={project.image} alt={project.title} className={`h-full w-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105 ${project.position ?? ''}`} /></div><div className="mt-5 flex items-start justify-between"><div><h3 className="font-serif text-2xl tracking-[-0.04em]">{project.title}</h3><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{project.category}</p></div><ArrowUpRight className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></a>)}</div></div>
      </section>

      <section id="estudio" className="bg-accent px-6 py-24 text-accent-foreground md:px-12 md:py-32"><div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-2 md:items-center"><p className="text-xs uppercase tracking-[0.22em]">El estudio / 2026</p><div><h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.06em] md:text-7xl">Tu espacio<br />empieza con<br /><i>una conversación.</i></h2><p className="mt-8 max-w-md text-base leading-7 text-accent-foreground/75">Somos un estudio de diseño y fabricación de mobiliario en melamina. Escuchamos cómo vives para crear piezas que se sientan realmente tuyas.</p></div></div></section>

      <section id="contacto" className="bg-secondary px-6 py-24 md:px-12 md:py-32"><div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_0.75fr]"><div><p className="mb-6 text-xs uppercase tracking-[0.22em] text-accent">Comencemos</p><h2 className="max-w-xl font-serif text-6xl leading-[0.94] tracking-[-0.06em] md:text-8xl">Hagamos<br /><i>algo tuyo.</i></h2><div className="mt-12 flex flex-col gap-3 text-sm text-primary/70"><a href="mailto:hola@modiru.com" className="flex items-center gap-3 hover:text-accent"><Mail size={16} /> hola@modiru.com</a><a href="tel:+51999999999" className="flex items-center gap-3 hover:text-accent"><Phone size={16} /> +51 999 999 999</a><span className="flex items-center gap-3"><MapPin size={16} /> Lima, Perú</span></div></div><form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-6"><label className="text-xs uppercase tracking-widest text-primary/60">Tu nombre<input required className="mt-3 w-full border-b border-primary/30 bg-transparent py-3 outline-none placeholder:text-primary/35 focus:border-accent" placeholder="¿Cómo te llamamos?" /></label><label className="text-xs uppercase tracking-widest text-primary/60">Tu correo<input required type="email" className="mt-3 w-full border-b border-primary/30 bg-transparent py-3 outline-none placeholder:text-primary/35 focus:border-accent" placeholder="hola@ejemplo.com" /></label><label className="text-xs uppercase tracking-widest text-primary/60">Cuéntanos sobre tu proyecto<textarea required rows={3} className="mt-3 w-full resize-none border-b border-primary/30 bg-transparent py-3 outline-none placeholder:text-primary/35 focus:border-accent" placeholder="Quiero transformar..." /></label><button type="submit" className="mt-3 flex w-fit items-center gap-3 bg-primary px-6 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground">{sent ? 'Mensaje enviado' : 'Enviar mensaje'} <ArrowUpRight size={16} /></button></form></div></section>

      <footer className="flex flex-col gap-8 bg-primary px-6 py-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-12"><a href="#inicio" className="font-serif text-2xl tracking-[-0.06em]">modiru<span className="text-accent">.</span></a><p className="text-xs text-primary-foreground/50">Diseñalos y transformamos tus espacios.</p><a href="https://instagram.com" aria-label="Instagram de Modiru" className="text-primary-foreground/60 hover:text-accent"><Camera size={19} /></a></footer>
    </main>
  )
}
