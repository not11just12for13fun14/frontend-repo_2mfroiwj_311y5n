import { motion } from 'framer-motion'
import { ShieldCheck, KeyRound, Radar, Lock, Cpu, Cloud, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Blue & Red Team Lab',
    desc: 'Simulasikan serangan & pertahanan dunia nyata dengan lab terpandu.'
  },
  { icon: KeyRound, title: 'Penetration Testing', desc: 'Belajar metodologi pentest lengkap: recon hingga reporting.' },
  { icon: Radar, title: 'Threat Intelligence', desc: 'Deteksi tren ancaman, IOC, dan TTP terkini di industri.' },
  { icon: Lock, title: 'Zero Trust Mindset', desc: 'Bangun arsitektur aman berbasis prinsip least privilege.' },
  { icon: Cloud, title: 'Cloud Security', desc: 'Praktik IAM, KMS, dan posture management di cloud populer.' },
  { icon: Cpu, title: 'AI for Security', desc: 'Otomasi analisis log & deteksi anomali dengan ML.' },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <GraduationCap size={14} /> Kurikulum Berbasis Industri
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl">
            Keunggulan Program
          </h2>
          <p className="mt-3 text-white/70">
            Dipandu mentor praktisi, materi selalu update, dan berorientasi pada portofolio serta sertifikasi global.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/0 via-violet-500/0 to-cyan-400/0 opacity-0 transition duration-500 group-hover:opacity-20" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
