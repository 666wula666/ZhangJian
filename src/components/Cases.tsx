import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { pick, useLanguage } from '../language'

const evidenceImage = `${import.meta.env.BASE_URL}evidence-strategy-room.jpg`

const copyByLang = {
  zh: {
    eyebrow: '争议处理',
    title: ['先看事实和证据，', '再决定程序和策略。'],
    intro: '不同案件的处理重点并不相同。前期评估通常会围绕请求基础、管辖、时效、证据状态、保全可能性和执行风险展开。',
    methodLabel: '工作方法',
    methodTitle: '证据、程序和谈判需要同时考虑。',
    methodDesc: '对复杂争议而言，律师工作通常不是单点处理，而是把事实整理、证据固定、程序选择、庭审表达和执行回款放在同一张图上评估。',
    methodItems: ['事实梳理', '证据组织', '程序推进'],
    materialsLabel: '常见材料',
    focusLabel: '处理重点',
    imageAlt: '海事与诉讼证据材料场景',
    scenarios: [
      {
        title: '合同与债权债务争议',
        context: '常见于买卖、借贷、担保、服务合同、合作协议履行过程中产生的付款、违约和责任承担问题。',
        materials: '合同文本、订单、送货和验收资料、付款凭证、对账记录、催收函件、聊天和邮件记录。',
        focus: '先判断请求权基础、时效和管辖，再围绕保全可能性、证据完整度和执行回款路径安排诉讼策略。',
      },
      {
        title: '公司股权、合规与合同审查',
        context: '常见于股权转让、出资瑕疵、股东知情权、公司决议效力、合伙退出、经营分歧、合规事项和交易合同审查。',
        materials: '公司章程、股东会决议、出资记录、工商档案、财务资料、股权协议、业务合同和往来沟通材料。',
        focus: '厘清权利边界、程序瑕疵和合同风险，结合诉讼、谈判、保全、合规整改和公司治理安排推进处理。',
      },
      {
        title: '海事海商与工程技术争议',
        context: '涉及船舶碰撞、机损保险、货损货差、船舶扣押、海上风电施工、海底电缆损害等事项。',
        materials: 'VDR/AIS 数据、航海日志、轮机日志、检验报告、维修记录、施工日志、气象海况和合同文件。',
        focus: '把技术事实、合同义务和法律责任连接起来，减少事实沟通偏差，形成清晰的举证路径。',
      },
      {
        title: '执行、保全与复杂程序衔接',
        context: '不少案件的关键不只在胜诉，还在于能否及时保全、推进执行、应对异议或处理多程序并行。',
        materials: '财产线索、交易流水、股权和不动产信息、裁判文书、执行材料、债权债务结构文件。',
        focus: '评估程序顺序和成本，尽早考虑保全、调解、执行、追加主体和破产清算等后续路径。',
      },
    ],
  },
  en: {
    eyebrow: 'Dispute Handling',
    title: ['Facts and evidence first,', 'then procedure and strategy.'],
    intro:
      'The focus differs from case to case. Early assessment usually covers the claim basis, jurisdiction, limitation period, evidence status, preservation options and enforcement risk.',
    methodLabel: 'Working Method',
    methodTitle: 'Evidence, procedure and negotiation need to be considered together.',
    methodDesc:
      'For complex disputes, legal work is usually not a single-point response. Facts, evidence preservation, procedure selection, hearing presentation and recovery prospects should be assessed on the same map.',
    methodItems: ['Fact Review', 'Evidence Organization', 'Procedure'],
    materialsLabel: 'Typical Materials',
    focusLabel: 'Key Focus',
    imageAlt: 'Evidence and litigation strategy scene',
    scenarios: [
      {
        title: 'Contract, Credit and Debt Disputes',
        context: 'Common in sale, loan, guarantee, service contract and cooperation agreement disputes involving payment, breach and liability.',
        materials: 'Contracts, orders, delivery and acceptance records, payment evidence, reconciliation records, demand letters, chats and emails.',
        focus: 'Review claim basis, limitation and jurisdiction first, then assess preservation, evidence completeness and enforcement recovery path.',
      },
      {
        title: 'Corporate Equity, Compliance and Contract Review',
        context:
          'Covers equity transfer, capital contribution defects, shareholder information rights, validity of corporate resolutions, partner exits, operation disagreements, compliance issues and transaction contract review.',
        materials: 'Articles of association, shareholder resolutions, contribution records, registry files, financial records, equity agreements, business contracts and correspondence.',
        focus:
          'Clarify rights, procedural defects and contract risks, then coordinate litigation, negotiation, preservation, compliance remediation and governance arrangements.',
      },
      {
        title: 'Maritime and Engineering Technical Disputes',
        context: 'Involves ship collision, machinery insurance, cargo loss, ship arrest, offshore wind construction and submarine cable damage matters.',
        materials: 'VDR/AIS data, navigation logs, engine logs, survey reports, repair records, construction logs, weather and sea condition records, and contracts.',
        focus: 'Connect technical facts, contractual obligations and legal liability to reduce fact misunderstandings and form a clear evidentiary path.',
      },
      {
        title: 'Enforcement, Preservation and Complex Procedures',
        context: 'For many cases, the key is not only winning, but also preservation, enforcement, objections and parallel procedures.',
        materials: 'Asset clues, transaction flows, equity and real estate information, judgments, enforcement documents and debt structure documents.',
        focus: 'Assess procedural sequence and cost early, including preservation, mediation, enforcement, adding responsible parties and bankruptcy liquidation.',
      },
    ],
  },
}

export default function Cases() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section className="section-wash border-y border-ink/10 bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
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

        <div className="mb-8 overflow-hidden rounded-md border border-ink/10 bg-ink shadow-[0_28px_85px_rgba(17,24,39,0.18)]">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[280px]">
              <img src={evidenceImage} alt={copy.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-transparent to-ink/30" />
            </div>
            <div className="p-7 text-white md:p-10">
              <p className="text-sm font-medium text-brass-light">{copy.methodLabel}</p>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">{copy.methodTitle}</h3>
              <p className="mt-6 text-sm leading-7 text-white/60">{copy.methodDesc}</p>
              <div className="mt-7 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                {copy.methodItems.map((item) => (
                  <span key={item} className="border-t border-white/20 pt-3">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {copy.scenarios.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="service-card group rounded-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_26px_80px_rgba(17,24,39,0.12)]"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="font-serif text-4xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-ink md:text-3xl">{item.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/60">{item.context}</p>
              <div className="mt-6 grid gap-4 border-t border-ink/10 pt-5 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-sea">{copy.materialsLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{item.materials}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-sea">{copy.focusLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{item.focus}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
