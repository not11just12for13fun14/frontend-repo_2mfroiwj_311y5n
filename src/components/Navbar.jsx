import { useState } from 'react'
import { Shield, Menu, X, Cpu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Program', href: '#program' },
    { label: 'Keunggulan', href: '#features' },
    { label: 'Kurikulum', href: '#kurikulum' },
    { label: 'Kontak', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 blur"></span>
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/30">
                  <Cpu size={18} />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-wide text-white/90">CYBERNOVA</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">Security</span>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-inner transition hover:bg-white/20"
              >
                <Shield size={16} className="opacity-90" />
                Mulai Belajar
              </a>
            </nav>

            <button
              className="md:hidden rounded-xl border border-white/10 bg-white/10 p-2 text-white"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white"
                >
                  <Shield size={16} /> Mulai Belajar
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
