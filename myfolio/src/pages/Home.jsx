import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/Hero'
import RolesSection from '../components/sections/RolesSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import InitiativesSection from '../components/sections/InitiativesSection'
import SkillsSection from '../components/sections/SkillsSection'
import ContactSection from '../components/sections/ContactSection'

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-coal-950 via-coal-900 to-coal-800 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 right-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-12 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <Header />
        <HeroSection />
        <RolesSection />
        <ProjectsSection />
        <InitiativesSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
