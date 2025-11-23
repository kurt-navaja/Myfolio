import Tag from '../Tag'
import { initiatives } from '../../data/portfolio'

function InitiativesSection() {
  return (
    <section id="initiatives" className="mb-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Tag>Impact Highlights</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Moments where multidisciplinary thinking made the difference.
          </h2>
        </div>
      </div>
      <div className="space-y-6">
        {initiatives.map((initiative) => (
          <article
            key={initiative.title}
            className="glass-card rounded-3xl border border-white/10 p-7 shadow-glow transition duration-300 hover:border-brand-300/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{initiative.timeline}</span>
              <span>Cross-functional leadership</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">{initiative.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{initiative.narrative}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {initiative.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl border border-white/10 bg-coal-900/60 px-4 py-3 text-xs font-medium text-slate-200">
                  {outcome}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default InitiativesSection
