'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Monitor,
  LayoutGrid,
  Shirt,
  Armchair,
  Store,
  Wrench,
  UserCheck,
  Ruler,
  ShieldCheck,
  Star
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

const services = [
  {
    icon: Monitor,
    title: 'Diseño y propuesta 3D',
    desc: 'Desarrollo de propuestas personalizadas con visualizaciones 3D para que veas tu proyecto antes de hacerlo realidad.',
    img: 'https://images.unsplash.com/photo-1542621323-220536c11db8?q=80&w=2074&auto=format&fit=crop'
  },
  {
    icon: LayoutGrid,
    title: 'Cocinas a medida',
    desc: 'Cocinas funcionales y elegantes diseñadas a tu medida, con acabados de alta calidad y distribución inteligente.',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Shirt,
    title: 'Clósets y vestidores',
    desc: 'Soluciones de almacenamiento a medida que combinan diseño, funcionalidad y aprovechamiento máximo del espacio.',
    img: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop'
  },
  {
    icon: Armchair,
    title: 'Mobiliario para oficinas',
    desc: 'Mobiliario ergonómico y moderno para oficinas que impulsa la productividad y refleja la identidad de tu empresa.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    icon: Store,
    title: 'Muebles comerciales',
    desc: 'Diseñamos y fabricamos mobiliario comercial que potencia la experiencia de tus clientes y tu marca.',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Wrench,
    title: 'Fabricación e instalación',
    desc: 'Fabricación con precisión e instalación profesional para garantizar un resultado impecable y duradero.',
    img: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop'
  }
]

export default function Servicios() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row bg-[#111111]">
        <div className="w-full lg:w-[45%] p-8 lg:p-20 xl:p-24 flex flex-col justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-[54px] font-bold mb-6 leading-[1.1]"
          >
            Servicios que diseñan,<br />
            fabrican y transforman<br />
            <span className="text-[#eab308]">espacios</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mb-10 max-w-md text-lg leading-relaxed"
          >
            En MODIRU ofrecemos soluciones integrales de mobiliario a medida en madera y melamina para hogares, oficinas y espacios comerciales. Diseño, calidad y precisión en cada detalle.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/proyectos">
              <Button variant="outline" className="text-[#eab308] border-[#eab308] hover:bg-[#eab308] hover:text-black w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
                Ver proyectos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
                Cotizar ahora <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-[600px] relative">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Mobiliario a medida" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            Nuestros servicios
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="group">
                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-xl aspect-[4/3]">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Floating Icon Box */}
                  <div className="absolute -bottom-5 left-6 bg-[#111111] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border border-white/10">
                    <service.icon className="text-[#eab308] w-6 h-6" />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's included Banner */}
      <section className="bg-[#111111] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="w-full lg:w-1/4">
              <h3 className="text-2xl font-bold">
                ¿Qué incluye <br />
                <span className="text-[#eab308]">nuestro servicio?</span>
              </h3>
            </div>
            
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start gap-4 lg:flex-col lg:items-start xl:flex-row">
                <UserCheck className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1 text-sm">Asesoría personalizada</h4>
                  <p className="text-white/60 text-xs leading-relaxed">Te acompañamos en cada etapa para entender tus necesidades y ofrecer la mejor solución.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 lg:flex-col lg:items-start xl:flex-row">
                <Ruler className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1 text-sm">Medición en obra</h4>
                  <p className="text-white/60 text-xs leading-relaxed">Realizamos mediciones precisas en el espacio para garantizar un ajuste perfecto.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 lg:flex-col lg:items-start xl:flex-row">
                <ShieldCheck className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1 text-sm">Materiales de calidad</h4>
                  <p className="text-white/60 text-xs leading-relaxed">Seleccionamos materiales duraderos y acabados premium para resultados superiores.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 lg:flex-col lg:items-start xl:flex-row">
                <Star className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1 text-sm">Acabados profesionales</h4>
                  <p className="text-white/60 text-xs leading-relaxed">Cuidamos cada detalle con mano de obra especializada para un acabado impecable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Proyectos relacionados
            </h2>
            <Link href="/proyectos" className="text-[#eab308] font-semibold flex items-center hover:text-[#d9a05b] transition-colors whitespace-nowrap">
              Ver todos los proyectos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", title: "Cocina moderna" },
              { img: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop", title: "Clóset funcional" },
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", title: "Oficina ejecutiva" }
            ].map((proj, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-[21/9] md:aspect-[4/3] lg:aspect-[21/9]">
                  <img 
                    src={proj.img} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg text-gray-900">{proj.title}</h3>
                  <span className="text-[#eab308] flex items-center text-sm font-medium opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Ver proyecto <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
