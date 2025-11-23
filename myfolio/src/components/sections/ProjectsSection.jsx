import Tag from '../Tag'
import { projects } from '../../data/portfolio'

function ProjectsSection() {
  return (
    <section id="projects" className="mb-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Tag>Selected Projects</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Work that blends quality, code, and design.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Each project is a collaborative story—connecting user insight, technical detail, and dependable delivery.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-card flex h-full flex-col justify-between rounded-3xl border border-white/10 p-7 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-brand-300/60"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex items-center text-sm font-semibold text-brand-200 transition hover:text-brand-100"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
                <span className="ml-2">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
