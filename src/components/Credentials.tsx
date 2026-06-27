import { motion } from 'framer-motion'
import { Award, BriefcaseBusiness, GraduationCap, Landmark, ShipWheel } from 'lucide-react'
import { pick, useLanguage } from '../language'

const icons = [
  <Landmark className="h-5 w-5" />,
  <ShipWheel className="h-5 w-5" />,
  <GraduationCap className="h-5 w-5" />,
  <BriefcaseBusiness className="h-5 w-5" />,
  <Award className="h-5 w-5" />,
]

const copyByLang = {
  zh: {
    eyebrow: '履历背书',
    title: ['专业可信度，', '来自可验证的长期积累。'],
    intro: '法律服务不能停留在条文适用本身。面对船舶、航运、保险、工程、合同和公司经营交织的争议，需要同时理解事实、程序、证据和商业背景。',
    credentials: [
      {
        title: '上海海仲律师事务所合伙人律师',
        desc: '主要办理诉讼、仲裁及相关非诉争议事务，重点包括海事海商、公司商事、合同及工程争议。',
      },
      {
        title: '资深轮机长与机务管理经验',
        desc: '长期从事海上服务、船舶监造、技术主管、机务经理等工作，熟悉船舶技术现场。',
      },
      {
        title: '轮机工程与法律复合教育',
        desc: '广州航海学院轮机工程、南京大学法律、大连海事大学轮机工程背景。',
      },
      {
        title: '国际航运企业服务经历',
        desc: '曾服务多家日本、香港、新加坡、德国等地区船东与船舶管理公司。',
      },
      {
        title: '技术证据梳理能力',
        desc: '能够围绕技术资料、合同文件和往来记录，形成相对清晰的事实结构和举证思路。',
      },
    ],
  },
  en: {
    eyebrow: 'Credentials',
    title: ['Professional credibility', 'built on verifiable long-term experience.'],
    intro:
      'Legal service cannot stop at the application of statutes. In disputes involving ships, shipping, insurance, engineering, contracts and corporate operations, facts, procedure, evidence and commercial background need to be understood together.',
    credentials: [
      {
        title: 'Partner, Shanghai Haizhong Law Firm',
        desc: 'Handles litigation, arbitration and related non-contentious dispute matters, with a focus on maritime, corporate commercial, contract and engineering disputes.',
      },
      {
        title: 'Chief Engineer and Marine Technical Management Experience',
        desc: 'Long-term experience in sea service, ship supervision, technical supervision and machinery management, with familiarity with ship technical operations.',
      },
      {
        title: 'Marine Engineering and Legal Education',
        desc: 'Educational background in marine engineering at Guangzhou Maritime University, law at Nanjing University and marine engineering at Dalian Maritime University.',
      },
      {
        title: 'International Shipping Company Experience',
        desc: 'Worked with shipowners and ship management companies from Japan, Hong Kong, Singapore, Germany and other jurisdictions.',
      },
      {
        title: 'Technical Evidence Organization',
        desc: 'Organizes technical materials, contract documents and correspondence into a clearer factual structure and evidentiary path.',
      },
    ],
  },
}

export default function Credentials() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section className="bg-ink py-24 text-white md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-brass-light">{copy.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70">{copy.intro}</p>
          </motion.div>

          <div className="grid gap-0 border-t border-white/20">
            {copy.credentials.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                className="grid gap-5 border-b border-white/20 py-7 md:grid-cols-[3.25rem_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-brass-light">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
