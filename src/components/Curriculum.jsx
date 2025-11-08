import { motion } from 'framer-motion'

const modules = [
  {
    week: '01',
    title: 'Fundamental Cyber Security',
    points: ['Konsep CIA triad', 'Model ancaman', 'Dasar jaringan & OS']
  },
  {
    week: '02',
    title: 'Reconnaissance & Enumeration',
    points: ['Passive & active recon', 'Scanning & service detection', 'OSINT praktik']
  },
  {
    week: '03',
    title: 'Web App Security',
    points: ['OWASP Top 10', 'Auth & session', 'Lab exploit praktis']
  },
  {
    week: '04',
    title: 'Cloud & Container Security',
    points: ['IAM & least privilege', 'Kubernetes basics', 'Supply-chain security']
  },
  {
    week: '05',
    title: 'Incident Response & DFIR',
    points: ['Playbook IR', 'Log analysis', 'Forensik dasar']
  },
]

export default function Curriculum() {
  return (
    <section id="kurikulum" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-5xl"
        >
          Kurikulum Inti
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl transition group-hover:scale-110" />
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-mono tracking-widest text-cyan-300/80">WEEK {m.week}</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70">Hands-on</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{m.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {m.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
