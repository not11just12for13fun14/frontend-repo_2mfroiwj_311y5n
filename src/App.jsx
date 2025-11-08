import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Curriculum from './components/Curriculum'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A14] text-white">
      {/* Background dynamic gradients + parallax layers */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[50vh] w-[90vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,_rgba(139,92,246,0.25),transparent)]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60vh] w-[60vw] rounded-[50%] bg-[radial-gradient(closest-side,_rgba(34,211,238,0.2),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Cybernova Security — Belajar aman, bertumbuh pasti.
      </footer>
    </div>
  )
}

export default App
