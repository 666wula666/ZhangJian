import { motion } from 'framer-motion'
import { Anchor, Building2, FileText, Landmark, Scale, ShieldCheck, UsersRound, Wind } from 'lucide-react'
import { pick, useLanguage } from '../language'

const icons = [
  <Scale className="h-5 w-5" />,
  <Anchor className="h-5 w-5" />,
  <Building2 className="h-5 w-5" />,
  <Wind className="h-5 w-5" />,
  <ShieldCheck className="h-5 w-5" />,
  <UsersRound className="h-5 w-5" />,
  <FileText className="h-5 w-5" />,
  <Landmark className="h-5 w-5" />,
]

const copyByLang = {
  zh: {
    eyebrow: '业务范围',
    title: ['以诉讼和仲裁为主，', '覆盖主要民商事争议类型。'],
    intro: '海事海商和船舶技术背景是特色，但服务并不限于海事领域。对常见民商事、公司、合规、合同、工程、知产、家事、破产执行等事项，均可结合案件材料进行评估和代理。',
    services: [
      {
        title: '民商事诉讼与仲裁',
        desc: '合同履行、买卖借贷、担保追偿、侵权赔偿、债权债务、财产保全、执行衔接等常见诉讼与仲裁事项。',
        tags: ['合同', '保全', '执行'],
      },
      {
        title: '海事海商争议',
        desc: '船舶碰撞、海难救助、共同海损、货损货差、提单争议、船舶扣押、机损与保险理赔等事项。',
        tags: ['海事', '货损', '扣船'],
      },
      {
        title: '公司股权、合规与合同审查',
        desc: '股东出资、股权转让、控制权争议、公司决议效力、合规事项梳理、业务合同审查及经营合作纠纷。',
        tags: ['股权', '合规', '合同审查'],
      },
      {
        title: '建设工程与海上风电',
        desc: '工程合同、工期延误、质量责任、结算索赔、施工船舶作业、海底电缆损害及相关仲裁争议。',
        tags: ['工程', '风电', '索赔'],
      },
      {
        title: '知识产权与商业秘密',
        desc: '商标、著作权、专利技术、技术合同、商业秘密保护及不正当竞争纠纷，兼顾证据固定与维权路径。',
        tags: ['知产', '技术合同', '商业秘密'],
      },
      {
        title: '婚姻家事与财富争议',
        desc: '离婚财产分割、继承、股权和房产分配、家族资产安排相关争议，重视证据、谈判和程序节奏。',
        tags: ['家事', '继承', '财富'],
      },
      {
        title: '破产清算与执行',
        desc: '债权申报、破产清算、重整相关事务、执行异议、追加被执行人、财产线索梳理与回款推进。',
        tags: ['破产', '清算', '执行'],
      },
      {
        title: '重大复杂争议综合代理',
        desc: '涉及多主体、多合同、多程序并行的争议，围绕诉讼策略、证据组织、谈判安排和风险评估展开工作。',
        tags: ['复杂案件', '多方争议', '策略评估'],
      },
    ],
  },
  en: {
    eyebrow: 'Services',
    title: ['Litigation and arbitration as core work,', 'with coverage across major civil and commercial disputes.'],
    intro:
      'Maritime and technical ship experience is a distinctive background, but the practice is not limited to maritime matters. Case assessment and representation may cover civil and commercial, corporate, compliance, contract, construction, IP, family, bankruptcy and enforcement matters.',
    services: [
      {
        title: 'Civil and Commercial Litigation',
        desc: 'Contract performance, sale and loan disputes, guarantee recovery, tort compensation, debt matters, preservation and enforcement-related work.',
        tags: ['Contract', 'Preservation', 'Enforcement'],
      },
      {
        title: 'Maritime and Admiralty Disputes',
        desc: 'Ship collision, salvage, general average, cargo loss and shortage, bill of lading disputes, ship arrest, machinery damage and insurance claims.',
        tags: ['Maritime', 'Cargo Loss', 'Ship Arrest'],
      },
      {
        title: 'Corporate Equity, Compliance and Contract Review',
        desc: 'Capital contribution, equity transfer, control disputes, validity of corporate resolutions, compliance review, business contract review and cooperation disputes.',
        tags: ['Equity', 'Compliance', 'Contract Review'],
      },
      {
        title: 'Construction and Offshore Wind',
        desc: 'Construction contracts, delay, quality liability, settlement claims, construction vessel operations, submarine cable damage and related arbitration matters.',
        tags: ['Construction', 'Offshore Wind', 'Claims'],
      },
      {
        title: 'IP and Trade Secrets',
        desc: 'Trademark, copyright, patent technology, technology contracts, trade secret protection and unfair competition disputes, with attention to evidence preservation.',
        tags: ['IP', 'Technology Contracts', 'Trade Secrets'],
      },
      {
        title: 'Family and Private Wealth Disputes',
        desc: 'Divorce property division, inheritance, equity and real estate allocation, and family asset-related disputes with attention to evidence, negotiation and procedure.',
        tags: ['Family', 'Inheritance', 'Wealth'],
      },
      {
        title: 'Bankruptcy, Liquidation and Enforcement',
        desc: 'Creditor claims, bankruptcy liquidation, restructuring-related work, enforcement objections, additional judgment debtors, asset tracing and recovery.',
        tags: ['Bankruptcy', 'Liquidation', 'Enforcement'],
      },
      {
        title: 'Major Complex Disputes',
        desc: 'Disputes involving multiple parties, contracts and procedures, with work around litigation strategy, evidence organization, negotiation and risk assessment.',
        tags: ['Complex Cases', 'Multi-party', 'Strategy'],
      },
    ],
  },
}

export default function Services() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section id="services" className="section-wash bg-paper py-24 md:py-28 lg:py-32">
      <div className="section-shell relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/60 lg:justify-self-end">{copy.intro}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className="service-card group rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_26px_80px_rgba(17,24,39,0.12)]"
            >
              <div className="flex items-center justify-between gap-5">
                <div className="service-icon flex h-11 w-11 items-center justify-center rounded-md text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                  {icons[index]}
                </div>
                <span className="font-serif text-3xl text-ink/20">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-7 font-serif text-2xl font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-4 min-h-[9.5rem] text-sm leading-7 text-ink/60">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-sm border border-ink/10 bg-white/70 px-2.5 py-1 text-xs text-ink/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
