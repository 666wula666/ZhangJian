import { motion } from 'framer-motion'
import { Anchor, ArrowRight, BadgeCheck, PhoneCall, Scale, ShieldCheck } from 'lucide-react'

const portrait = `${import.meta.env.BASE_URL}avatar-lawyer.png`

const facts = [
  { label: '航海与机务', value: '24 年+' },
  { label: '律师执业', value: '8 年+' },
  { label: '国际船东经历', value: '10 家+' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-20 text-white">
      <div className="marine-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.98)_0%,rgba(17,24,39,0.84)_45%,rgba(17,24,39,0.38)_72%,rgba(17,24,39,0.72)_100%)]" />
      <img
        src={portrait}
        alt="张健律师"
        className="hero-portrait absolute bottom-0 right-[-26%] h-[58%] max-h-[780px] w-auto object-contain opacity-35 sm:right-[-12%] sm:h-[62%] md:right-0 md:h-[88%] md:opacity-90"
      />

      <div className="section-shell relative min-h-[78svh] py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
          >
            <Anchor className="h-4 w-4 text-brass-light" />
            上海海仲律师事务所合伙人律师
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="font-serif text-6xl font-semibold leading-[1.05] text-white md:text-7xl lg:text-8xl"
          >
            张健律师
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-7 max-w-3xl text-2xl font-medium leading-snug text-white md:text-3xl"
          >
            资深轮机长出身的海事海商律师，把船舶技术判断力带入诉讼、仲裁与复杂商事谈判。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
          >
            从机舱、船厂、机务管理到法庭，长期处理海事海商、海上风电争议、公司商务与综合争议解决。复杂案件里，技术细节往往就是胜负边界。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md bg-brass px-6 text-sm font-semibold text-white transition-colors hover:bg-brass-dark"
            >
              <ShieldCheck className="h-4 w-4" />
              预约案件评估
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:15861989012"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <PhoneCall className="h-4 w-4" />
              158 6198 9012
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
          className="mt-12 grid max-w-4xl grid-cols-3 border-y border-white/20"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="border-r border-white/20 py-4 pr-3 last:border-r-0 sm:px-5 sm:first:pl-0">
              <p className="font-serif text-2xl font-semibold text-white md:text-3xl">{fact.value}</p>
              <p className="mt-2 text-xs leading-5 text-white/60 sm:text-sm">{fact.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-white/5">
        <div className="section-shell grid gap-4 py-5 text-sm text-white/70 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-brass-light" />
            海事海商诉讼与仲裁
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-brass-light" />
            轮机工程与法律复合背景
          </div>
          <div className="flex items-center gap-2">
            <Anchor className="h-4 w-4 text-brass-light" />
            船舶技术证据深度梳理
          </div>
        </div>
      </div>
    </section>
  )
}
