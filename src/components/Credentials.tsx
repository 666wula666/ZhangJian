import { motion } from 'framer-motion'
import { Award, BriefcaseBusiness, GraduationCap, Landmark, ShipWheel } from 'lucide-react'

const credentials = [
  {
    icon: <Landmark className="h-5 w-5" />,
    title: '上海海仲律师事务所合伙人律师',
    desc: '现阶段重点服务海事海商诉讼、海上风电争议、公司商务与复杂争议解决。',
  },
  {
    icon: <ShipWheel className="h-5 w-5" />,
    title: '资深轮机长与机务管理经验',
    desc: '长期从事海上服务、船舶监造、技术主管、机务经理等工作，熟悉船舶技术现场。',
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: '轮机工程与法律复合教育',
    desc: '广州航海学院轮机工程、南京大学法律、大连海事大学轮机工程背景。',
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: '国际航运企业服务经历',
    desc: '曾服务多家日本、香港、新加坡、德国等地区船东与船舶管理公司。',
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: '技术证据转化能力',
    desc: '擅长将复杂技术事实转化为诉讼、仲裁和谈判中的有效表达。',
  },
]

export default function Credentials() {
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
            <p className="text-sm font-medium text-brass-light">履历背书</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
              专业可信度，
              <br />
              来自可验证的长期积累。
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70">
              海事法律服务不是简单套用条文。面对船舶、航运、保险、工程、合同和公司经营交织的争议，真正能落地的方案来自长期行业理解和法律训练的叠加。
            </p>
          </motion.div>

          <div className="grid gap-0 border-t border-white/20">
            {credentials.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.05 }}
                className="grid gap-5 border-b border-white/20 py-7 md:grid-cols-[3.25rem_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-brass-light">
                  {item.icon}
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
