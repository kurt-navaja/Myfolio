import profileImage from '../../assets/profile.png'
import { hero, quickFacts } from '../../data/portfolio'

function HeroSection() {
  return (
    <section id="hero" className="mb-24 grid items-center gap-16 lg:grid-cols-[1.2fr_0.9fr]">
      <div>
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          {hero.badge}
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300">{hero.description}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
            href={hero.ctas.primary.href}
          >
            {hero.ctas.primary.label}
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white"
            href={hero.ctas.secondary.href}
          >
            {hero.ctas.secondary.label}
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickFacts.map((item) => {
            const details = Array.isArray(item.detail) ? item.detail : [item.detail]

            return (
              <article
                key={item.heading}
                className="glass-card rounded-2xl border border-white/10 p-6 shadow-glow xl:px-7 xl:py-7"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.heading}</p>
                <ul className="mt-3 space-y-2 text-sm font-medium text-slate-100">
                  {details.map((line) => (
                    <li key={line} className="leading-relaxed text-slate-200">
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="glass-card overflow-hidden rounded-3xl border border-white/10 shadow-glow">
          <img className="h-full w-full object-cover" src={profileImage} alt="Kurt Bryan C. Navaja" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
