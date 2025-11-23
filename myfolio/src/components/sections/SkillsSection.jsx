import Tag from '../Tag'
import { skills } from '../../data/portfolio'

function SkillsSection() {
  return (
    <section id="skills" className="mb-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Tag>Core Skills</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            A hardworking toolbox built for modern product teams.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Each skill comes from shipping Gradify, FitFlow, and Creative Clarity—balancing QA discipline, frontend craft, support empathy, and collaborative follow-through.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow">
            <h3 className="font-display text-xl font-semibold text-white">{category}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
