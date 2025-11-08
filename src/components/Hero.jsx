import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-28" id="hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1A] via-[#0A0A1A] to-[#0D1020]" />

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:items-start md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Edukasi Cyber Security • 2025 Standard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Bangun Kariermu di Dunia
          <br className="hidden sm:block" />
          Keamanan Siber Modern
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Kurikulum praktis, lab interaktif, dan simulasi serangan nyata. Dirancang untuk pemula hingga profesional, dengan pendekatan hands-on dan studi kasus terbaru.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#program"
            className="group rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-white shadow-[0_8px_30px_rgb(99,102,241,0.35)] transition hover:brightness-110"
          >
            Jelajahi Program
          </a>
          <a
            href="#cta"
            className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
