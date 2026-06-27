import { motion } from 'framer-motion'

export default function Quote() {
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
          <p className="text-sm font-medium text-brass">执业准则</p>
          <blockquote className="font-serif text-3xl font-semibold leading-snug text-ink md:text-4xl lg:text-5xl">
            始终把客户利益最大化和满意度，作为律师执业的出发点与长期追求。
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
