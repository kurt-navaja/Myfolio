import Tag from '../Tag'
import { contact } from '../../data/portfolio'

function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <div className="glass-card flex flex-col gap-8 rounded-3xl border border-brand-300/40 bg-brand-500/10 p-10 text-slate-100 shadow-glow md:flex-row md:items-center md:justify-between">
        <div>
          <Tag>{contact.badge}</Tag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-200">{contact.description}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-slate-200">
          {contact.links.map((link) => {
            const externalProps = link.href.startsWith('mailto:')
              ? {}
              : { target: '_blank', rel: 'noreferrer' }

            return (
              <a
                key={link.label}
                className="inline-flex items-center gap-2 transition hover:text-white"
                href={link.href}
                {...externalProps}
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
