import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl"
          >
            Siap Naik Level? Bergabung dengan Cohort Terdekat.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 max-w-2xl text-white/70"
          >
            Dapatkan akses lab, mentor, dan komunitas praktisi. Kuota terbatas untuk pengalaman belajar yang intensif.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-white shadow-[0_8px_30px_rgb(99,102,241,0.35)] transition hover:brightness-110"
            >
              Daftar Sekarang
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              Lihat Silabus
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
