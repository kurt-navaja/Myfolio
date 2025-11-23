import Tag from '../Tag'
import { roles } from '../../data/portfolio'

function RolesSection() {
  return (
    <section id="roles" className="mb-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Tag>Practical Experience</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Hands-on roles I rotate through to ship software.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            I move between QA, development, support, delivery, and design so teams can count on clear handoffs and honest status updates.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role) => (
          <article
            key={role.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:bg-brand-500/10"
          >
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-400/0 to-brand-500/10 opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <h3 className="font-display text-xl font-semibold text-white">{role.title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-200">{role.headline}</p>
            <p className="mt-4 text-sm text-slate-300">{role.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {role.focus.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-coal-900/70 px-3 py-1 text-xs font-medium text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RolesSection
