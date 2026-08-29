'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shirt, Ruler, ShieldCheck, Star, UserCheck } from 'lucide-react'

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
    title: 'Aprovechamiento máximo',
    desc: 'Diseños que optimizan cada centímetro de tu espacio, incluso en zonas difíciles o bajo escaleras.'
  },
  {
    icon: ShieldCheck,
    title: 'Materiales duraderos',
    desc: 'Melaminas de alta calidad con acabados resistentes al uso diario y fáciles de mantener.'
  },
  {
    icon: Star,
    title: 'Interiores inteligentes',
    desc: 'Cajones, barras, organizadores y estantes configurados según tu ropa y accesorios.'
  },
  {
    icon: UserCheck,
    title: 'Personalización total',
    desc: 'Elige colores, tiradores, espejos y luces para un clóset que refleje tu estilo.'
  }
]

export default function ClosetsYVestidores() {
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
            Servicios / Clósets
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-[54px] font-bold mb-6 leading-[1.1]"
          >
            Clósets y vestidores
            <br />
            <span className="text-[#eab308]">a tu medida</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mb-10 max-w-md text-lg leading-relaxed"
          >
            Soluciones de almacenamiento a medida que combinan diseño, funcionalidad y aprovechamiento máximo del espacio. Organiza tu ropa y tus espacios con elegancia.
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
            src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2072&auto=format&fit=crop"
            alt="Clóset a medida"
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
              <span className="text-[#eab308] font-bold text-sm tracking-widest uppercase mb-4 block">CLÓSETS Y VESTIDORES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Orden, estilo y espacio
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Diseñamos clósets y vestidores que se adaptan a tu espacio y a tu forma de vida. Desde el tradicional armario hasta vestidores completos con isla central, cada detalle está pensado para que todo tenga su lugar.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Configuramos el interior según lo que necesitas: barras para ropa de colgar, cajones para plegables, zapateras, organizadores y estantes. La iluminación integrada y los espejos añaden un toque de lujo y funcionalidad.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2070&auto=format&fit=crop"
                alt="Vestidor a medida"
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
              { num: '01', title: 'Asesoría', desc: 'Analizamos tu espacio y tus necesidades de almacenamiento.' },
              { num: '02', title: 'Diseño', desc: 'Proponemos la distribución ideal en 3D para tu aprobación.' },
              { num: '03', title: 'Fabricación', desc: 'Fabricamos con precisión y materiales de primera calidad.' },
              { num: '04', title: 'Instalación', desc: 'Instalamos y dejamos tu clóset listo para usar.' }
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
                Diseña tu clóset <ArrowRight className="w-4 h-4" />
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
            <Shirt className="text-[#eab308] w-10 h-10 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Un clóset para cada espacio
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Desde un armario sencillo hasta un vestidor completo. Descubre cuánto espacio puedes aprovechar.
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
