import { motion } from 'framer-motion'
import { Anchor, Building2, FileText, ShieldCheck, UsersRound, Wind } from 'lucide-react'

const services = [
  {
    icon: <Anchor className="h-5 w-5" />,
    title: '海事海商诉讼',
    desc: '船舶碰撞、海难救助、共同海损、货损货差、提单争议、船舶扣押与海事保全。',
    tags: ['碰撞', '货损', '保全'],
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: '海上风电争议',
    desc: '海上风电施工、运维、船舶作业、海底电缆损害、工程延期及索赔争议。',
    tags: ['风电', '工程', '仲裁'],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: '机损与保险理赔',
    desc: '主辅机损害、适航争议、维修费用、保险拒赔、检验报告与技术责任认定。',
    tags: ['机损', '保险', '鉴定'],
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: '公司商务',
    desc: '进出口贸易、航运企业常年顾问、合同审查、合规风控与商务谈判支持。',
    tags: ['常法', '合同', '合规'],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: '并购重组与清算',
    desc: '航运、物流、贸易企业的股权交易、资产重组、债权债务梳理及破产清算事务。',
    tags: ['并购', '债务', '清算'],
  },
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: '私人财富与家事',
    desc: '为企业家、高管及航运从业者提供婚姻家事、财富传承、股权安排与风险隔离方案。',
    tags: ['家事', '传承', '股权'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">业务领域</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              围绕航运、工程、
              <br />
              商事争议建立服务版图。
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/60 lg:justify-self-end">
            从海事专门法院到仲裁机构，从事故调查到合同谈判，服务不是孤立地处理一个环节，而是围绕结果设计证据、程序与沟通路径。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="group rounded-md border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brass/50"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white transition-colors group-hover:bg-sea">
                  {item.icon}
                </div>
                <span className="font-serif text-3xl text-ink/20">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-7 font-serif text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 min-h-[6.25rem] text-sm leading-7 text-ink/60">{item.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-sm border border-ink/10 px-2.5 py-1 text-xs text-ink/60">
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
