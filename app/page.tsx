'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  PenTool, 
  Settings, 
  Wrench,
  UserCheck,
  Star,
  CheckCircle2,
  ArrowRight
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
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#111111] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Cocina moderna" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Mobiliario a medida<br />
              que transforma<br />
              <span className="text-[#eab308]">tus espacios</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/80 mb-10 max-w-lg">
              Diseñamos, fabricamos e instalamos muebles en madera y melamina para hogares, oficinas y negocios.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/proyectos">
                <Button variant="outline" className="text-white border-white/30 bg-transparent hover:bg-white/10 hover:border-white/50 w-full sm:w-auto h-12 px-8 text-base transition-all duration-300">
                  Ver proyectos <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors duration-300">
                  Cotizar ahora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow duration-300">
              <div className="bg-[#111111] w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                <PenTool className="text-[#eab308] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Diseño</h3>
                <p className="text-gray-600">
                  Escuchamos tus ideas y las convertimos en diseños 3D funcionales y estéticos que se adaptan a tu espacio y estilo.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow duration-300">
              <div className="bg-[#111111] w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                <Settings className="text-[#eab308] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fabricación</h3>
                <p className="text-gray-600">
                  Utilizamos materiales de alta calidad y tecnología moderna para garantizar durabilidad, precisión y un acabado impecable.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow duration-300">
              <div className="bg-[#111111] w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                <Wrench className="text-[#eab308] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Instalación</h3>
                <p className="text-gray-600">
                  Nuestro equipo profesional asegura una instalación limpia, segura y en el tiempo acordado, cuidando cada detalle.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="flex flex-col lg:flex-row overflow-hidden">
        <motion.div 
          className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop" 
            alt="Taller de carpintería" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 bg-[#1A1A1A] text-white p-12 lg:p-24 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeIn} className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">NOSOTROS</motion.span>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Creamos espacios funcionales con diseño y precisión
          </motion.h2>
          <motion.p variants={fadeIn} className="text-white/70 mb-12 text-lg">
            En MODIRU diseñamos, fabricamos e instalamos mobiliario a medida en madera y melamina para hogares, oficinas y negocios.
            Combinamos creatividad, experiencia y atención al detalle para ofrecer soluciones que transforman espacios.
          </motion.p>
          
          <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <UserCheck className="text-[#eab308] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg mb-2">Atención personalizada</h4>
              <p className="text-white/60 text-sm">Te acompañamos en cada etapa de tu proyecto.</p>
            </div>
            <div>
              <Star className="text-[#eab308] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg mb-2">Materiales de calidad</h4>
              <p className="text-white/60 text-sm">Trabajamos con maderas y herrajes de primera.</p>
            </div>
            <div>
              <CheckCircle2 className="text-[#eab308] w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg mb-2">Acabados profesionales</h4>
              <p className="text-white/60 text-sm">Cuidado en cada detalle para resultados impecables.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Link href="/nosotros">
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none font-semibold px-8 h-12 transition-colors duration-300">
                Conócenos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">PROYECTOS DESTACADOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Mobiliario a medida que habla por nosotros
              </h2>
            </div>
            <Link href="/proyectos" className="text-gray-900 font-semibold flex items-center hover:text-[#eab308] transition-colors whitespace-nowrap">
              Ver todos los proyectos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", title: "Cocina moderna" },
              { img: "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop", title: "Clóset a medida" },
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", title: "Oficina funcional" }
            ].map((proj, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img 
                    src={proj.img} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-xl text-gray-900">{proj.title}</h3>
                  <span className="text-[#eab308] flex items-center text-sm font-medium opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Ver proyecto <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">CÓMO TRABAJAMOS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestro proceso
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <motion.div 
              className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-[#eab308]/40 via-[#eab308] to-[#eab308]/40 z-0 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />
            
            {[
              { num: '01', title: 'Asesoría y levantamiento', desc: 'Escuchamos tus ideas, entendemos tus necesidades y tomamos medidas del espacio para un diagnóstico preciso.', icon: UserCheck },
              { num: '02', title: 'Diseño y propuesta', desc: 'Desarrollamos una propuesta 3D y seleccionamos materiales, acabados y herrajes ideales para tu proyecto.', icon: PenTool },
              { num: '03', title: 'Fabricación', desc: 'Procesamos los materiales con tecnología moderna, control de calidad y atención al detalle en cada etapa.', icon: Settings },
              { num: '04', title: 'Instalación y entrega', desc: 'Instalamos con precisión y cuidado, asegurando resultados impecables y tu total satisfacción.', icon: Wrench },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                className="relative z-10 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
              >
                <motion.div 
                  className="bg-white border-2 border-gray-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] group-hover:border-[#eab308]/40 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <step.icon className="text-[#eab308] w-8 h-8" />
                </motion.div>
                <span className="text-[#eab308] font-bold mb-2">{step.num}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">TESTIMONIOS</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <Link href="/proyectos" className="text-[#eab308] font-semibold flex items-center hover:text-white transition-colors">
              Ver más reseñas <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                text: "Quedamos encantados con el resultado. Entendieron perfectamente lo que queríamos y los acabados son de primer nivel. 100% recomendados.",
                author: "Maria Fernanda R.",
                location: "Miraflores, Lima"
              },
              {
                text: "Cumplieron los plazos prometidos y el proyecto fue muy ordenado. El clóset quedó perfecto y la instalación fue impecable.",
                author: "Carlos A.",
                location: "San Isidro, Lima"
              },
              {
                text: "Se nota la calidad de los materiales y el detalle en cada acabado. Volveré a trabajar con ellos sin dudarlo.",
                author: "Patricia M.",
                location: "La Molina, Lima"
              }
            ].map((test, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-[#1A1A1A] border border-white/10 p-8 rounded-2xl relative">
                <div className="text-[#eab308] absolute top-8 right-8 text-6xl font-serif leading-none opacity-20">"</div>
                <div className="flex text-[#eab308] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80 mb-8 relative z-10 leading-relaxed">
                  {test.text}
                </p>
                <div>
                  <p className="font-bold">{test.author}</p>
                  <p className="text-white/50 text-sm">{test.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

