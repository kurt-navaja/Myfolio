import { useEffect, useMemo, useState } from 'react'
import { profile, navLinks } from '../data/portfolio'
import profileImage from '../assets/profile.png'

function Header() {
  const labels = useMemo(() => {
    if (Array.isArray(profile.roleLabels)) {
      return profile.roleLabels.filter(Boolean)
    }

    if (typeof profile.roleLabels === 'string') {
      return profile.roleLabels
        .split('·')
        .map((label) => label.trim())
        .filter(Boolean)
    }

    return []
  }, [])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (labels.length <= 1) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % labels.length)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [labels.length])

  useEffect(() => {
    if (labels.length === 0) {
      setActiveIndex(0)
    } else if (activeIndex >= labels.length) {
      setActiveIndex(0)
    }
  }, [labels.length, activeIndex])

  const currentLabel = labels.length > 0 ? labels[activeIndex] : 'Multidisciplinary technologist'

  return (
    <header className="sticky top-0 z-20 -mx-6 mb-16 border-b border-white/5 bg-coal-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-2xl border border-white/10 shadow-glow">
            <img src={profileImage} alt={profile.name} className="h-full w-full object-cover" />
          </div>
          <div className="w-60 min-w-[12rem]">
            <p className="font-display text-base font-semibold tracking-wide text-white">
              {profile.name}
            </p>
            <div
              className="relative h-5 overflow-hidden text-xs uppercase tracking-[0.28em] text-slate-400"
              aria-live="polite"
            >
              <span key={currentLabel} className="block animate-slide-up">
                {currentLabel}
              </span>
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="hidden rounded-full border border-brand-400/60 bg-brand-500/20 px-4 py-2 text-sm font-semibold text-brand-200 shadow-glow transition hover:border-brand-300 hover:bg-brand-400/30 md:inline-flex"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </header>
  )
}

export default Header
