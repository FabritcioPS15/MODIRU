'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Lightbulb
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

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#111111] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2070&auto=format&fit=crop" 
            alt="Taller de carpintería MODIRU" 
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
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Pasión por la <br />
              <span className="text-[#eab308]">madera y el diseño</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              En MODIRU no solo fabricamos muebles, creamos experiencias y transformamos espacios para que reflejen tu verdadera esencia.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Historia y Filosofía */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">NUESTRA HISTORIA</motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                De una idea a la excelencia en cada detalle
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 mb-6 leading-relaxed">
                MODIRU nació de la pasión por el trabajo artesanal combinado con la tecnología moderna. Iniciamos como un pequeño taller enfocado en acabados perfectos, y hoy somos un equipo multidisciplinario de diseñadores, arquitectos y maestros carpinteros.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-8">
                Creemos que el mobiliario debe ser una extensión de tu personalidad o de la identidad de tu marca. Por eso, abordamos cada proyecto con el mismo nivel de dedicación, asegurando que cada corte, cada unión y cada acabado hable por nuestra calidad.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1622372738982-b131804f32c3?q=80&w=2072&auto=format&fit=crop" 
                  alt="Detalle de trabajo en madera" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#111111] text-white p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-[#eab308] mb-2">+5</p>
                <p className="font-bold">Años de trayectoria</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eab308]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <Target className="text-[#eab308] w-12 h-12 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Diseñar y fabricar mobiliario a medida que optimice el uso del espacio y mejore la calidad de vida de nuestros clientes. Nos comprometemos a entregar productos duraderos, funcionales y estéticamente superiores a través de un servicio personalizado e integral.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eab308]/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <Eye className="text-[#eab308] w-12 h-12 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Convertirnos en el referente líder de diseño y fabricación de mobiliario a medida a nivel nacional, reconocidos por nuestra innovación constante, atención al detalle y por establecer nuevos estándares de calidad en la industria del mueble.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-32 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">NUESTROS PILARES</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Valores que nos definen
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-6">
                <Heart className="text-[#eab308] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pasión por el detalle</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cada proyecto es único. Cuidamos cada milímetro desde el plano inicial hasta la limpieza final post-instalación.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#eab308] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantía de calidad</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Utilizamos maderas, melaminas y herrajes de primeras marcas para asegurar que tus muebles resistan el paso del tiempo.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-6">
                <Lightbulb className="text-[#eab308] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovación funcional</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Buscamos siempre nuevas formas de optimizar espacios con diseños inteligentes que faciliten tu día a día.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#eab308] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">
              ¿Listo para empezar a crear?
            </h2>
            <p className="text-[#111111]/80 font-medium">
              Conoce al equipo que hará realidad tus ideas.
            </p>
          </div>
          <Link href="/contacto">
            <Button className="bg-[#111111] text-white hover:bg-[#1a1a1a] border-none font-semibold px-8 h-14 text-lg transition-colors">
              Contáctanos ahora <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
