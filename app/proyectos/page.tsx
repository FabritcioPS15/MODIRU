'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Diamond,
  Settings,
  UserCheck,
  Trophy,
  Smile,
  Calendar
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const projects = [
  { id: 1, category: 'Cocinas', title: 'Cocina contemporánea', desc: 'Diseño en melamina madera con isla central y distribución eficiente.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, category: 'Clósets', title: 'Clóset ejecutivo', desc: 'Organización optimizada con acabados elegantes y detalles de alta calidad.', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop' },
  { id: 3, category: 'Oficinas', title: 'Oficina corporativa', desc: 'Espacios de trabajo ergonómicos con diseño moderno que potencia la productividad.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, category: 'Comercial', title: 'Showroom comercial', desc: 'Mobiliario a medida que realza la presentación y experiencia del cliente.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, category: 'Residencial', title: 'Centro de entretenimiento', desc: 'Mueble integrado con iluminación cálida y acabados que crean ambiente.', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2064&auto=format&fit=crop' },
  { id: 6, category: 'Oficinas', title: 'Recepción empresarial', desc: 'Diseño que refleja la identidad corporativa con funcionalidad y estilo.', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop' },
]

const categories = ['Todos', 'Cocinas', 'Clósets', 'Oficinas', 'Comercial']

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row bg-[#111111]">
        <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl lg:text-[54px] font-bold mb-6 leading-tight"
          >
            Proyectos que reflejan <br />
            calidad, <span className="text-[#eab308]">diseño</span> y precisión
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mb-10 max-w-md text-lg leading-relaxed"
          >
            Explora una selección de proyectos realizados por MODIRU en cocinas, clósets, oficinas y espacios comerciales. <br/><br/>
            Cada proyecto combina funcionalidad, estética y acabados de alta calidad.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="outline" className="text-[#eab308] border-[#eab308] hover:bg-[#eab308] hover:text-black w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
              Ver todos <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/contacto">
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
                Solicitar cotización
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Cocina de diseño" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Nuestros proyectos
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            key={activeCategory} // Force re-render animation when category changes
            variants={staggerContainer}
          >
            {filteredProjects.map((proj) => (
              <motion.div key={proj.id} variants={fadeIn} className="group flex flex-col">
                <div className="overflow-hidden rounded-xl mb-4 aspect-[16/9]">
                  <img 
                    src={proj.img} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[#eab308] font-bold text-xs tracking-wider uppercase mb-2 block">{proj.category}</span>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{proj.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{proj.desc}</p>
                  <Link href="#" className="mt-auto text-[#eab308] font-medium flex items-center text-sm hover:text-[#d9a05b] transition-colors">
                    Ver proyecto <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="flex flex-col lg:flex-row bg-[#1a1a1a]">
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative">
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop" 
            alt="Clóset walk-in" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">PROYECTO DESTACADO</motion.span>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Diseño a medida para espacios que inspiran
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/70 mb-10 text-base">
              Este clóset walk-in combina materiales premium, iluminación LED y una distribución inteligente para ofrecer máximo orden y sofisticación.
              Cada detalle fue diseñado y fabricado a medida para nuestro cliente.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-start gap-3">
                <Diamond className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <span className="font-semibold text-sm">Materiales premium</span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Settings className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <span className="font-semibold text-sm">Fabricación precisa</span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <UserCheck className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <span className="font-semibold text-sm">Instalación profesional</span>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none font-semibold px-8 h-12 transition-colors">
                Ver caso completo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 py-6 md:py-0">
              <Trophy className="text-[#eab308] w-12 h-12" strokeWidth={1.5} />
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">120+</h3>
                <p className="text-gray-500 font-medium">proyectos entregados</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 py-6 md:py-0">
              <Smile className="text-[#eab308] w-12 h-12" strokeWidth={1.5} />
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">98%</h3>
                <p className="text-gray-500 font-medium">clientes satisfechos</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 py-6 md:py-0">
              <Calendar className="text-[#eab308] w-12 h-12" strokeWidth={1.5} />
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-1">5 años</h3>
                <p className="text-gray-500 font-medium">de experiencia</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#111111] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23eab308\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-[#1a1a1a] p-4 rounded-full border border-white/10 hidden md:block">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                ¿Tienes un <span className="text-[#eab308]">proyecto en mente?</span>
              </h2>
              <p className="text-white/80">
                Cuéntanos tu idea y la convertimos en un espacio funcional y memorable.
              </p>
            </div>
          </div>
          <Link href="/contacto">
            <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none font-semibold px-8 h-14 text-lg transition-colors">
              Solicitar cotización <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
