'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Monitor, Ruler, ShieldCheck, Star, UserCheck } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const features = [
  {
    icon: Ruler,
    title: 'Medición exacta',
    desc: 'Tomamos medidas precisas de tu espacio para que la propuesta se ajuste perfectamente a la realidad.'
  },
  {
    icon: ShieldCheck,
    title: 'Visualización 3D',
    desc: 'Ves tu proyecto en 3D antes de fabricarlo: colores, materiales, acabados y distribución realista.'
  },
  {
    icon: Star,
    title: 'Propuesta personalizada',
    desc: 'Cada diseño parte de tus gustos, estilo y necesidades. Nada de plantillas genéricas.'
  },
  {
    icon: UserCheck,
    title: 'Asesoría experta',
    desc: 'Te orientamos en la selección de materiales, herrajes y colores acordes a tu presupuesto.'
  }
]

export default function DisenoYPropuesta3D() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row bg-[#111111]">
        <div className="w-full lg:w-[45%] p-8 lg:p-20 xl:p-24 flex flex-col justify-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            Servicios / Diseño
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-[54px] font-bold mb-6 leading-[1.1]"
          >
            Diseño y propuesta 3D,
            <br />
            <span className="text-[#eab308]">ve tu espacio antes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mb-10 max-w-md text-lg leading-relaxed"
          >
            Desarrollamos propuestas personalizadas con visualizaciones 3D para que veas tu proyecto antes de hacerlo realidad. Diseño, estética y funcionalidad en un solo lugar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contacto">
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
                Cotizar ahora <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button variant="outline" className="text-white border-white/30 bg-transparent hover:bg-white/10 hover:border-white/50 w-full sm:w-auto h-12 px-8 text-base transition-all duration-300">
                Ver todos los servicios
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full lg:w-[55%] min-h-[400px] lg:min-h-[600px] relative">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1542621323-220536c11db8?q=80&w=2074&auto=format&fit=crop"
            alt="Diseño y propuesta 3D"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">DISEÑO Y PROPUESTA 3D</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Materializa tus ideas
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Antes de fabricar cualquier mueble, creamos una representación 3D realista de tu proyecto. Así puedes tomar decisiones informadas sobre materiales, colores y distribución sin sorpresas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo de diseño escucha tus ideas y las convierte en propuestas funcionales y estéticas. Iteramos contigo hasta alcanzar el resultado que imaginas, garantizando que lo que ves sea exactamente lo que recibes.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                alt="Diseño 3D de mobiliario"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-gray-900 mb-12"
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6">
                <div className="bg-[#111111] w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="text-[#eab308] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#111111] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">CÓMO TRABAJAMOS</span>
            <h2 className="text-3xl md:text-4xl font-bold">Nuestro proceso</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { num: '01', title: 'Escuchamos', desc: 'Entendemos tus necesidades, estilo y presupuesto desde el primer contacto.' },
              { num: '02', title: 'Medimos', desc: 'Tomamos medidas exactas del espacio y analizamos cada detalle del entorno.' },
              { num: '03', title: 'Diseñamos en 3D', desc: 'Creamos la propuesta 3D con colores, materiales y acabados realistas.' },
              { num: '04', title: 'Aprobamos', desc: 'Ajustamos la propuesta contigo hasta que estés 100% conforme.' }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} className="text-center">
                <span className="text-[#eab308] font-bold mb-2 block">{step.num}</span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link href="/contacto">
              <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none h-12 px-8 text-base font-semibold inline-flex items-center gap-2 transition-colors">
                Quiero mi propuesta 3D <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Monitor className="text-[#eab308] w-10 h-10 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforma tu idea en realidad
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Cuéntanos qué imaginas y te sorprenderás con lo que podemos crear para ti. La propuesta 3D es el primer paso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto">
                <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none h-12 px-8 text-base font-semibold transition-colors">
                  Cotizar ahora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="text-gray-900 border-gray-300 hover:border-[#eab308] hover:text-[#eab308] h-12 px-8 text-base transition-colors">
                  Otros servicios
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
