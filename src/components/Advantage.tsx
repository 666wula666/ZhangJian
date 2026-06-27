import { motion } from 'framer-motion'
import { ClipboardCheck, Gauge, MessagesSquare, SearchCheck } from 'lucide-react'

const stats = [
  { value: '24+', label: '年航海与机务经验' },
  { value: '8+', label: '年专职律师经验' },
  { value: '10+', label: '家国际船东与管理公司经历' },
  { value: '3', label: '重教育背景：轮机、法律、海事' },
]

const advantages = [
  {
    icon: <SearchCheck className="h-5 w-5" />,
    title: '技术事实先行',
    desc: '能从船舶结构、机舱运行、维修痕迹和事故链条中定位争议核心，不停留在表面法律叙述。',
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: '证据材料读得深',
    desc: '对航海日志、轮机日志、VDR 数据、车钟记录、检验报告和维修账单有更强的识别能力。',
  },
  {
    icon: <MessagesSquare className="h-5 w-5" />,
    title: '专业沟通更同频',
    desc: '能够与船东、机务、保险人、鉴定人、海事调查人员和审判人员建立更准确的事实沟通。',
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: '策略兼顾商业结果',
    desc: '重视保全、谈判、诉讼、仲裁和执行之间的节奏，避免客户只得到一份抽象的法律意见。',
  },
]

export default function Advantage() {
  return (
    <section id="advantage" className="border-y border-ink/10 bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-ink/10 pb-12 md:grid-cols-4">
          {stats.map((item, index) => (
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
            <p className="eyebrow">专业优势</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              海事案件的关键，
              <br />
              经常藏在技术细节里。
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/60">
              船舶碰撞、机损、货损、海上工程索赔等纠纷，往往需要同时理解法律规则、行业惯例、技术报告和现场操作。技术型律师的价值，在于更早把事实链条理清。
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {advantages.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className="rounded-md border border-ink/10 bg-paper p-6 transition-colors hover:border-brass/50 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sea text-white">{item.icon}</div>
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
