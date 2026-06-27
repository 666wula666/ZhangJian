import { motion } from 'framer-motion'

const experiences = [
  {
    period: '2025.04 - 至今',
    role: '合伙人律师',
    company: '上海海仲律师事务所',
    desc: '聚焦海事海商诉讼、海上风电项目诉讼与仲裁，同时处理知识产权、公司商务、并购重组和破产清算等综合法律服务。',
  },
  {
    period: '2023.06 - 2025.03',
    role: '合伙人律师',
    company: '上海英科律师事务所',
    desc: '为涉外海事海商客户提供专项法律咨询和涉诉法律服务，参与公司商务、私人财富管理等复合型事务。',
  },
  {
    period: '2019.09 - 2023.05',
    role: '诉讼律师',
    company: '泰和泰（上海）律师事务所',
    desc: '专业代理海事、海商、非诉和诉讼法律事务，并担任多家进出口贸易公司常年法律顾问。',
  },
  {
    period: '2016.07 - 2019.08',
    role: '诉讼律师 / 主任助理',
    company: '江苏省理高律师事务所',
    desc: '熟悉商事仲裁、刑事、民事诉讼及非诉业务程序，具备扎实庭辩、谈判和法律文书能力。',
  },
  {
    period: '2000.05 起',
    role: '轮机长 / 首席船舶监造 / 技术主管 / 机务经理',
    company: '多家国际船东与船舶管理公司',
    desc: '先后服务于 MK(JAPAN)、SINOTRANS(H.K.)、CSL(JAPAN)、P&F(S.KOREA)、PIL(SINGAPORE)、BSM(Germany) 等航运企业。',
  },
]

const education = [
  { year: '1986 - 1990', school: '广州航海学院', major: '轮机工程' },
  { year: '2008 - 2012', school: '南京大学', major: '法律' },
  { year: '2022 - 2024', school: '大连海事大学', major: '轮机工程' },
]

const profile = [
  ['现任', '上海海仲律师事务所合伙人律师'],
  ['专业方向', '海事海商、海上风电争议、公司商务'],
  ['技术背景', '轮机长、机务管理、船舶监造'],
  ['服务区域', '上海浦东及全国海事法院、仲裁机构'],
]

export default function AboutMe() {
  return (
    <section id="about" className="bg-paper py-24 md:py-28 lg:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">律师简介</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              从机舱到法庭，
              <br />
              用技术经验校准法律策略。
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-ink/70">
              <p>
                张健律师具备少见的“航运技术 + 法律实务”复合履历。转型律师前，长期从事海上服务、船舶监造、机务管理和技术管理工作，熟悉船舶运行、维修、管理体系与事故调查逻辑。
              </p>
              <p>
                在海事海商争议中，他能直接读懂技术材料和行业语境，把航海日志、轮机日志、VDR 数据、机损报告、维修记录等证据转化为可被法院、仲裁庭和谈判对方理解的法律事实。
              </p>
            </div>

            <div className="mt-10 grid gap-3">
              {profile.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5.5rem_1fr] border-t border-ink/10 py-4 text-sm">
                  <span className="font-medium text-brass">{label}</span>
                  <span className="text-ink/76">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="space-y-12"
        >
          <div>
            <div className="mb-6 flex items-end justify-between gap-6 border-b border-ink/10 pb-5">
              <h3 className="font-serif text-3xl font-semibold text-ink">职业履历</h3>
              <span className="text-sm text-ink/40">Experience</span>
            </div>
            <div className="space-y-0">
              {experiences.map((item) => (
                <article key={`${item.period}-${item.company}`} className="grid gap-4 border-b border-ink/10 py-7 md:grid-cols-[10rem_1fr]">
                  <div className="text-sm font-medium text-sea">{item.period}</div>
                  <div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                      <h4 className="font-serif text-2xl font-semibold text-ink">{item.role}</h4>
                      <p className="text-sm text-ink/60">{item.company}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-ink/60">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="mb-4 border-b border-ink/10 pb-4">
                <h3 className="font-serif text-2xl font-semibold text-ink">教育背景</h3>
              </div>
              <div className="space-y-0">
                {education.map((item) => (
                  <div key={`${item.school}-${item.year}`} className="grid grid-cols-[7rem_1fr] border-b border-ink/10 py-4">
                    <span className="text-sm text-ink/48">{item.year}</span>
                    <div>
                      <p className="font-medium text-ink">{item.school}</p>
                      <p className="mt-1 text-sm text-ink/60">{item.major}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-ink/10 bg-white p-6">
              <p className="text-sm font-medium text-brass">核心识别</p>
              <p className="mt-5 font-serif text-2xl font-semibold leading-snug text-ink">
                不是“懂一点航运”的律师，而是长期在船舶技术现场工作过的法律服务者。
              </p>
              <p className="mt-5 text-sm leading-7 text-ink/60">
                面对机损、碰撞、货损、海上工程索赔等案件，技术事实、证据路径和法律责任往往互相缠绕。复合背景可以减少沟通成本，也能更早识别案件关键。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
