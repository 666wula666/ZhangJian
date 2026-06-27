import { motion } from 'framer-motion'
import { Anchor, ArrowRight, BadgeCheck, PhoneCall, Scale, ShieldCheck } from 'lucide-react'
import { pick, useLanguage } from '../language'

const base = import.meta.env.BASE_URL
const heroImage = `${base}hero-maritime-law.jpg`
const portrait = `${base}lawyer-zhangjian-bust.jpg`

const copyByLang = {
  zh: {
    badge: '上海海仲律师事务所合伙人律师 · 资深轮机长',
    name: '张健律师',
    headline: ['以诉讼为主业，', '以事实和证据推进案件。'],
    intro:
      '海事海商是重要专业方向，诉讼与仲裁是主要工作内容。围绕合同、公司股权、合规审查、工程建设、知识产权、婚姻家事、破产清算和执行等争议，提供从评估、证据梳理到庭审和后续衔接的法律服务。',
    strengths: ['诉讼 / 仲裁主业', '技术事实重构', '复杂证据攻防'],
    primaryCta: '预约案件初判',
    facts: [
      { label: '航海与机务', value: '24 年+' },
      { label: '诉讼律师执业', value: '8 年+' },
      { label: '国际船东经历', value: '10 家+' },
    ],
    leadLabel: 'Lead Counsel',
    cardName: '张健',
    cardRole: '合伙人律师 / 资深轮机长 / 诉讼与仲裁争议解决',
    featureLabel: '主要特点',
    featureValue: '法律策略 + 船舶技术',
    strip: ['诉讼仲裁与争议解决', '海事海商与技术证据背景', '主流民商事争议代理'],
    portraitAlt: '张健律师',
  },
  en: {
    badge: 'Partner, Shanghai Haizhong Law Firm · Former Chief Engineer',
    name: 'Lawyer Zhang Jian',
    headline: ['Litigation-led counsel,', 'grounded in facts and evidence.'],
    intro:
      'Maritime and admiralty matters are a key practice area, while litigation and arbitration remain the core work. Services cover contracts, corporate equity, compliance review, construction, intellectual property, family wealth, bankruptcy liquidation and enforcement disputes, from assessment and evidence review to hearings and follow-up procedures.',
    strengths: ['Litigation / Arbitration', 'Technical fact analysis', 'Evidence strategy'],
    primaryCta: 'Case Assessment',
    facts: [
      { label: 'Marine and technical work', value: '24+' },
      { label: 'Litigation practice', value: '8+' },
      { label: 'International shipowner experience', value: '10+' },
    ],
    leadLabel: 'Lead Counsel',
    cardName: 'Zhang Jian',
    cardRole: 'Partner / Former Chief Engineer / Litigation and Arbitration',
    featureLabel: 'Focus',
    featureValue: 'Legal strategy + marine technical insight',
    strip: ['Litigation, arbitration and dispute resolution', 'Maritime background and technical evidence', 'Mainstream civil and commercial disputes'],
    portraitAlt: 'Lawyer Zhang Jian',
  },
}

export default function Hero() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink pt-20 text-white">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(17,24,39,0.98)_0%,rgba(17,24,39,0.9)_42%,rgba(17,24,39,0.62)_68%,rgba(17,24,39,0.82)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(217,183,98,0.18),transparent_30%,transparent_68%,rgba(47,111,115,0.2)),linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_100%,88px_88px,88px_88px]" />
      <div className="luxury-sweep absolute inset-x-0 top-0 -z-10 h-px" />

      <div className="section-shell relative grid min-h-[82svh] gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/[0.12] px-4 py-2 text-sm text-white/80 shadow-[0_18px_55px_rgba(0,0,0,0.26)] backdrop-blur"
          >
            <Anchor className="h-4 w-4 text-brass-light" />
            {copy.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="font-serif text-6xl font-semibold leading-[1.03] text-white md:text-7xl lg:text-8xl"
          >
            {copy.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="mt-7 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white md:text-4xl"
          >
            {copy.headline[0]}
            <br className="hidden sm:block" />
            {copy.headline[1]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg"
          >
            {copy.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {copy.strengths.map((item) => (
              <span key={item} className="rounded-md border border-white/20 bg-white/[0.12] px-3 py-2 text-sm text-white/75 shadow-[0_10px_28px_rgba(0,0,0,0.16)] backdrop-blur">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="gold-button group inline-flex h-[54px] items-center justify-center gap-2 rounded-md px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              <ShieldCheck className="h-4 w-4" />
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:15861989012"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.12] px-5 py-3 text-center text-sm font-semibold leading-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:px-7"
            >
              <PhoneCall className="h-4 w-4" />
              <span>158 6198 9012 / 183 0193 8689</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="mt-12 grid max-w-3xl grid-cols-3 overflow-hidden rounded-md border border-white/20 bg-white/[0.12] shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
          >
            {copy.facts.map((fact) => (
              <div key={fact.label} className="border-r border-white/20 p-4 last:border-r-0 sm:p-5">
                <p className="font-serif text-2xl font-semibold text-white md:text-3xl">{fact.value}</p>
                <p className="mt-2 text-xs leading-5 text-white/60 sm:text-sm">{fact.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[470px] lg:ml-auto"
        >
          <div className="absolute -inset-3 rounded-full bg-brass/20 blur-3xl sm:-inset-8" />
          <div className="premium-card fine-frame relative overflow-hidden rounded-md border border-white/20 bg-white/[0.12] p-3 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-sm border border-white/20 bg-ink">
              <img
                src={portrait}
                alt={copy.portraitAlt}
                className="h-[520px] w-full object-cover object-[center_top] saturate-[0.96] contrast-105 md:h-[590px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 pt-28">
                <p className="text-xs font-semibold text-brass-light">{copy.leadLabel}</p>
                <p className="mt-2 font-serif text-3xl font-semibold text-white">{copy.cardName}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{copy.cardRole}</p>
              </div>
            </div>
            <div className="absolute right-5 top-5 rounded-md border border-white/20 bg-ink/80 px-4 py-3 text-right backdrop-blur">
              <p className="text-xs text-white/50">{copy.featureLabel}</p>
              <p className="mt-1 max-w-[13rem] font-serif text-lg leading-snug text-white">{copy.featureValue}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur">
        <div className="section-shell grid gap-4 py-5 text-sm text-white/70 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 shrink-0 text-brass-light" />
            {copy.strip[0]}
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 shrink-0 text-brass-light" />
            {copy.strip[1]}
          </div>
          <div className="flex items-center gap-2">
            <Anchor className="h-4 w-4 shrink-0 text-brass-light" />
            {copy.strip[2]}
          </div>
        </div>
      </div>
    </section>
  )
}
