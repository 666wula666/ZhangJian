import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const scenarios = [
  {
    title: '船舶碰撞与责任比例争议',
    context: '常见于航线交汇、避碰行动、航速控制、值班注意义务等事实存在较大争议的案件。',
    materials: 'VDR 数据、航海日志、AIS 轨迹、海事声明、碰撞痕迹、损失清单。',
    focus: '还原事故链条，识别对方陈述与技术事实之间的矛盾，推动责任比例与赔偿范围谈判。',
  },
  {
    title: '主机机损与保险拒赔争议',
    context: '常见于保险人以不适航、维护不当、既有缺陷等理由拒赔或压低赔付的案件。',
    materials: '轮机日志、检验报告、维修记录、备件更换记录、油样分析、船级社资料。',
    focus: '判断机损成因与保险责任边界，组织技术事实说明，支持理赔、调解、诉讼或仲裁。',
  },
  {
    title: '海上风电施工与海底电缆损害',
    context: '涉及施工船舶、海上作业窗口、锚泊管理、工期损失、第三方责任和保险分摊。',
    materials: '施工日志、气象海况、船舶轨迹、海缆检测报告、停工损失文件、合同条款。',
    focus: '把工程事实、船舶作业事实和合同责任连接起来，厘清索赔基础与举证路径。',
  },
]

export default function Cases() {
  return (
    <section className="border-y border-ink/10 bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">代表性场景</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              复杂争议，
              <br />
              需要先把事实讲清楚。
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/60 lg:justify-self-end">
            以下为脱敏后的典型争议类型。真正的案件策略，需要结合证据状态、时效、管辖、保全可能性和商业目标综合判断。
          </p>
        </div>

        <div className="grid gap-4">
          {scenarios.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
              className="group grid gap-8 rounded-md border border-ink/10 bg-paper p-6 transition-colors hover:border-brass/50 hover:bg-white md:grid-cols-[0.75fr_1.25fr]"
            >
              <div>
                <div className="flex items-center justify-between gap-6">
                  <span className="font-serif text-4xl text-brass">{String(index + 1).padStart(2, '0')}</span>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-ink md:text-3xl">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-ink/60">{item.context}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-t border-ink/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="text-sm font-medium text-sea">关键材料</p>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{item.materials}</p>
                </div>
                <div className="border-t border-ink/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="text-sm font-medium text-sea">介入重点</p>
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
