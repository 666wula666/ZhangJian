import { motion } from 'framer-motion'
import { pick, useLanguage } from '../language'

const copyByLang = {
  zh: {
    eyebrow: '执业准则',
    quote: '以事实为基础，以证据为中心，在程序和风险之间为客户作出清晰判断。',
  },
  en: {
    eyebrow: 'Practice Standard',
    quote: 'Clear judgment for clients should be built on facts, evidence, procedure and risk.',
  },
}

export default function Quote() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section className="border-b border-ink/10 bg-white py-14 md:py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end"
        >
          <p className="text-sm font-medium text-brass">{copy.eyebrow}</p>
          <blockquote className="font-serif text-3xl font-semibold leading-snug text-ink md:text-4xl lg:text-5xl">
            {copy.quote}
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
