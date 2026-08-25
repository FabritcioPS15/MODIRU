'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  UserCheck,
  Zap,
  Ruler,
  Plus,
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
      staggerChildren: 0.15
    }
  }
}

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row bg-[#111111]">
        <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Conversemos sobre tu <br />
            <span className="text-[#eab308]">próximo proyecto</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 mb-10 max-w-md text-lg"
          >
            Estamos listos para ayudarte a diseñar, fabricar e instalar mobiliario a medida para hogares, oficinas y espacios comerciales. Escríbenos y coordinemos una asesoría personalizada.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="outline" className="text-[#eab308] border-[#eab308] hover:bg-[#eab308] hover:text-black w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
              Escribir por WhatsApp <Phone className="ml-2 w-4 h-4" />
            </Button>
            <Button className="bg-[#eab308] text-black hover:bg-[#d9a05b] border-none w-full sm:w-auto h-12 px-8 text-base font-semibold transition-colors">
              Solicitar cotización
            </Button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Recepción MODIRU" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left: Form */}
            <motion.div variants={fadeIn} className="w-full lg:w-[55%]">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Ponte en contacto</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Teléfono / WhatsApp" 
                      className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors text-gray-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.7rem_auto]">
                      <option value="">Tipo de proyecto</option>
                      <option value="cocina">Cocina</option>
                      <option value="closet">Clóset</option>
                      <option value="oficina">Oficina</option>
                      <option value="comercial">Comercial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Distrito / Ciudad" 
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Cuéntanos sobre tu proyecto" 
                    rows={5}
                    className="w-full bg-white border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#eab308] transition-colors resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#d9a05b] hover:bg-[#eab308] text-black font-semibold h-12 text-base transition-colors">
                  Enviar consulta <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Right: Info */}
            <motion.div variants={fadeIn} className="w-full lg:w-[45%] lg:pl-10">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full space-y-8">
                <div className="flex gap-4">
                  <Phone className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">WhatsApp</p>
                    <p className="text-gray-600">+51 987 654 321</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Teléfono</p>
                    <p className="text-gray-600">(01) 234 5678</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Correo</p>
                    <p className="text-gray-600">hola@modiru.pe</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Dirección</p>
                    <p className="text-gray-600">Av. Javier Prado Este 1234,<br/>San Isidro, Lima, Perú</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Horario de atención</p>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 am - 6:00 pm<br/>Sábados: 9:00 am - 1:00 pm</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <button className="flex items-center font-bold text-[#eab308] hover:text-[#d9a05b] transition-colors">
                    <Calendar className="mr-3 w-5 h-5" /> Agendar visita <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Banner */}
      <section className="bg-[#111111] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold">
                ¿Por qué <br />
                <span className="text-[#eab308]">escribirnos?</span>
              </h3>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <UserCheck className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1">Atención personalizada</h4>
                  <p className="text-white/60 text-sm">Te acompañamos en cada etapa de tu proyecto con soluciones a medida.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1">Respuesta rápida</h4>
                  <p className="text-white/60 text-sm">Respondemos tus consultas de forma ágil y eficiente.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Ruler className="text-[#eab308] w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold mb-1">Asesoría técnica</h4>
                  <p className="text-white/60 text-sm">Te brindamos orientación profesional para lograr el mejor resultado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Visítanos</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl overflow-hidden relative h-64 lg:h-auto border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover blur-sm" alt="Mapa background" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-[#111111] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <MapPin className="text-[#eab308] w-5 h-5" /> 
                  <span className="font-bold">MODIRU <span className="font-normal text-white/70 text-sm block">Showroom</span></span>
                </div>
              </div>
            </div>
            
            {/* Showroom Image */}
            <div className="rounded-xl overflow-hidden h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" 
                alt="Showroom MODIRU"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Visit Details */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 space-y-8 flex flex-col justify-center">
              <div className="flex gap-4">
                <MapPin className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Cómo llegar</h4>
                  <p className="text-gray-600 text-sm">Estamos en Av. Javier Prado Este 1234,<br/>San Isidro, Lima, Perú.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-[#eab308] text-[#eab308] flex items-center justify-center font-bold text-xs shrink-0 mt-1">P</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Estacionamiento cercano</h4>
                  <p className="text-gray-600 text-sm">Contamos con estacionamiento<br/>privado para nuestros visitantes.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Calendar className="text-[#eab308] w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Atención con cita previa</h4>
                  <p className="text-gray-600 text-sm">Te recomendamos agendar tu visita<br/>para brindarte una atención dedicada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Preguntas frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer hover:border-[#eab308] transition-colors">
                <h4 className="font-bold text-gray-900">¿Atienden proyectos residenciales y corporativos?</h4>
                <Plus className="text-gray-400 w-5 h-5 shrink-0" />
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer hover:border-[#eab308] transition-colors">
                <h4 className="font-bold text-gray-900">¿Realizan visitas para medición?</h4>
                <Plus className="text-gray-400 w-5 h-5 shrink-0" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer hover:border-[#eab308] transition-colors">
                <h4 className="font-bold text-gray-900">¿Trabajan con melamina y madera?</h4>
                <Plus className="text-gray-400 w-5 h-5 shrink-0" />
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 flex justify-between items-center cursor-pointer hover:border-[#eab308] transition-colors">
                <h4 className="font-bold text-gray-900">¿Cuánto demora un proyecto?</h4>
                <Plus className="text-gray-400 w-5 h-5 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner (copied from Home to maintain the flow as seen in the image) */}
      <section className="bg-[#111111] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23eab308\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              ¿Listo para <span className="text-[#eab308]">transformar tu espacio?</span>
            </h2>
            <p className="text-white/80">
              Cuéntanos tu idea y empecemos a diseñar una solución a medida.
            </p>
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
