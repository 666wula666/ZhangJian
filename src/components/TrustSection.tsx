import { motion } from 'framer-motion'
import { CheckCircle2, Clock3, FileCheck2, MessagesSquare } from 'lucide-react'
import { pick, useLanguage } from '../language'

const icons = [
  <MessagesSquare className="h-5 w-5" />,
  <FileCheck2 className="h-5 w-5" />,
  <Clock3 className="h-5 w-5" />,
  <CheckCircle2 className="h-5 w-5" />,
]

const copyByLang = {
  zh: {
    eyebrow: '委托流程',
    title: ['让复杂案件，', '从第一通电话开始变清楚。'],
    intro:
      '法律服务不只是等待材料齐备，也需要在早期判断处理顺序、主要风险和证据重点。对于海事、工程及复杂商事争议，前几步的证据固定和时效判断尤其重要。',
    promises: [
      {
        title: '先评估，再委托',
        desc: '先沟通事实、证据、诉求、时效和管辖，再判断是否适合正式进入委托。',
      },
      {
        title: '证据与策略同步',
        desc: '围绕技术材料、合同文本、往来函件和损失证明形成可执行的法律路径。',
      },
      {
        title: '节点反馈清晰',
        desc: '前期评估、保全、立案、庭审、调解、执行等关键阶段保持明确反馈。',
      },
      {
        title: '关注后续执行',
        desc: '同时考虑诉讼请求、回款可能、成本控制、谈判空间与客户经营影响。',
      },
    ],
    pathLabel: 'Service Path',
    steps: [
      { no: '01', title: '初步沟通', detail: '说明纠纷背景、对方主体、关键时间节点、目前证据和目标结果。' },
      { no: '02', title: '材料判断', detail: '梳理合同、日志、报告、函件、损失材料和管辖依据，识别核心风险。' },
      { no: '03', title: '路径设计', detail: '确定谈判、保全、诉讼、仲裁或组合路径，明确阶段任务和费用预期。' },
      { no: '04', title: '持续推进', detail: '围绕案件节点更新进展，结合新材料和程序变化调整处理方案。' },
    ],
  },
  en: {
    eyebrow: 'Engagement Process',
    title: ['Complex cases become clearer', 'from the first discussion.'],
    intro:
      'Legal work is not only about waiting for all materials to arrive. Early judgment on sequence, risk and evidence focus is often important, especially in maritime, engineering and complex commercial disputes.',
    promises: [
      {
        title: 'Assessment Before Engagement',
        desc: 'Discuss facts, evidence, objectives, limitation and jurisdiction before deciding whether to enter a formal engagement.',
      },
      {
        title: 'Evidence and Strategy Together',
        desc: 'Build a workable path around technical materials, contracts, correspondence and loss evidence.',
      },
      {
        title: 'Clear Updates at Key Stages',
        desc: 'Provide clear feedback during assessment, preservation, filing, hearing, mediation and enforcement stages.',
      },
      {
        title: 'Attention to Enforcement',
        desc: 'Consider claims, recovery prospects, cost control, negotiation room and business impact together.',
      },
    ],
    pathLabel: 'Service Path',
    steps: [
      { no: '01', title: 'Initial Discussion', detail: 'Explain the dispute background, opposing party, key dates, current evidence and target outcome.' },
      { no: '02', title: 'Material Review', detail: 'Review contracts, logs, reports, correspondence, loss materials and jurisdiction basis to identify core risks.' },
      { no: '03', title: 'Path Design', detail: 'Decide negotiation, preservation, litigation, arbitration or combined routes, with stage tasks and expected costs.' },
      { no: '04', title: 'Continued Progress', detail: 'Update case progress by stage and adjust the plan as new materials or procedural changes arise.' },
    ],
  },
}

export default function TrustSection() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

  return (
    <section className="bg-paper py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {copy.promises.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="rounded-md border border-ink/10 bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brass text-white">{icons[index]}</div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="rounded-md bg-ink p-6 text-white md:p-8 lg:p-10"
          >
            <p className="text-sm font-medium text-brass-light">{copy.pathLabel}</p>
            <div className="mt-7 divide-y divide-white/20">
              {copy.steps.map((step) => (
                <div key={step.no} className="grid gap-4 py-7 first:pt-0 last:pb-0 md:grid-cols-[4.5rem_1fr]">
                  <span className="font-serif text-4xl text-brass-light">{step.no}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
