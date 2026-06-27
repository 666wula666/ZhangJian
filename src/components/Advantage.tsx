import { motion } from 'framer-motion'
import { ClipboardCheck, Gauge, MessagesSquare, SearchCheck } from 'lucide-react'
import { pick, useLanguage } from '../language'

const icons = [
  <SearchCheck className="h-5 w-5" />,
  <ClipboardCheck className="h-5 w-5" />,
  <MessagesSquare className="h-5 w-5" />,
  <Gauge className="h-5 w-5" />,
]

const copyByLang = {
  zh: {
    stats: [
      { value: '24+', label: '年航海与机务经验' },
      { value: '8+', label: '年专职律师经验' },
      { value: '10+', label: '家国际船东与管理公司经历' },
      { value: '3', label: '重教育背景：轮机、法律、海事' },
    ],
    eyebrow: '专业背景',
    title: ['海事案件的关键，', '经常藏在技术细节里。'],
    intro:
      '船舶碰撞、机损、货损、海上工程索赔等纠纷，往往需要同时理解法律规则、行业惯例、技术报告和现场操作。技术背景的作用，在于帮助律师更准确地理解事实材料，并把争议焦点尽早整理清楚。',
    advantages: [
      {
        title: '技术事实先行',
        desc: '从船舶结构、机舱运行、维修痕迹和事故链条入手，先把事实基础梳理清楚。',
      },
      {
        title: '技术材料理解',
        desc: '能够较快理解航海日志、轮机日志、VDR 数据、车钟记录、检验报告和维修账单中的关键信息。',
      },
      {
        title: '事实沟通更准确',
        desc: '与船东、机务、保险人、鉴定人、海事调查人员和审判人员沟通时，尽量减少技术事实误读。',
      },
      {
        title: '程序衔接意识',
        desc: '重视保全、谈判、诉讼、仲裁和执行之间的顺序，避免案件处理停留在单一环节。',
      },
    ],
  },
  en: {
    stats: [
      { value: '24+', label: 'years in marine engineering and technical management' },
      { value: '8+', label: 'years as a dedicated litigation lawyer' },
      { value: '10+', label: 'international shipowners and management companies served' },
      { value: '3', label: 'education tracks: marine engineering, law and maritime studies' },
    ],
    eyebrow: 'Professional Background',
    title: ['In maritime cases,', 'key issues often sit inside technical details.'],
    intro:
      'Ship collisions, machinery damage, cargo loss and offshore engineering claims usually require an understanding of legal rules, industry practice, technical reports and on-site operations. The technical background helps clarify facts and identify disputed issues earlier.',
    advantages: [
      {
        title: 'Technical Facts First',
        desc: 'Reviews vessel structure, engine room operations, repair traces and accident chains before building the legal analysis.',
      },
      {
        title: 'Technical Material Review',
        desc: 'Able to read navigation logs, engine logs, VDR data, engine telegraph records, survey reports and repair invoices with context.',
      },
      {
        title: 'More Accurate Fact Communication',
        desc: 'Helps reduce misunderstanding when communicating with shipowners, technical managers, insurers, surveyors, investigators and tribunals.',
      },
      {
        title: 'Procedural Coordination',
        desc: 'Considers preservation, negotiation, litigation, arbitration and enforcement as connected steps rather than isolated tasks.',
      },
    ],
  },
}

export default function Advantage() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section id="advantage" className="border-y border-ink/10 bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-ink/10 pb-12 md:grid-cols-4">
          {copy.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-ink/10 md:border-r md:pr-6 md:last:border-r-0"
            >
              <p className="font-serif text-4xl font-semibold text-ink md:text-5xl">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-ink/60">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/60">{copy.intro}</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.advantages.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="rounded-md border border-ink/10 bg-paper p-6 transition-colors hover:border-brass/50 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sea text-white">{icons[index]}</div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/60">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
