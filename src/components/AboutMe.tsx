import { motion } from 'framer-motion'
import { pick, useLanguage } from '../language'

const portrait = `${import.meta.env.BASE_URL}lawyer-zhangjian-card.jpg`

const copyByLang = {
  zh: {
    eyebrow: '律师简介',
    title: ['从机舱到法庭，', '用技术经验校准法律策略。'],
    paragraphs: [
      '张健律师具备少见的“航运技术 + 法律实务”复合履历。转型律师前，长期从事海上服务、船舶监造、机务管理和技术管理工作，熟悉船舶运行、维修、管理体系与事故调查逻辑。',
      '在海事海商争议中，他能直接理解技术材料和行业语境，把航海日志、轮机日志、VDR 数据、机损报告、维修记录等资料梳理为可用于诉讼、仲裁和谈判的法律事实。',
    ],
    profile: [
      ['现任', '上海海仲律师事务所合伙人律师'],
      ['专业方向', '诉讼/仲裁、海事海商、公司商事、合规与合同审查、家事财富、知产与清算'],
      ['技术背景', '轮机长、机务管理、船舶监造'],
      ['办公地址', '上海市普陀区中山北路2668号联合大厦26楼2601室'],
    ],
    portraitAlt: '张健律师',
    portraitName: '张健律师',
    portraitDesc: '上海海仲律师事务所合伙人律师，具有轮机长与机务管理背景。',
    experienceTitle: '职业履历',
    experienceLabel: 'Experience',
    experiences: [
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
    ],
    educationTitle: '教育背景',
    education: [
      { year: '1986 - 1990', school: '广州航海学院', major: '轮机工程' },
      { year: '2008 - 2012', school: '南京大学', major: '法律' },
      { year: '2022 - 2024', school: '大连海事大学', major: '轮机工程' },
    ],
    coreLabel: '核心识别',
    coreTitle: '不是“懂一点航运”的律师，而是长期在船舶技术现场工作过的法律服务者。',
    coreDesc:
      '面对机损、碰撞、货损、海上工程索赔等案件，技术事实、证据路径和法律责任往往互相交织。复合背景有助于更准确地理解案件材料，并提前识别争议焦点。',
  },
  en: {
    eyebrow: 'Profile',
    title: ['From engine room to courtroom,', 'technical experience informs legal strategy.'],
    paragraphs: [
      'Lawyer Zhang Jian has a combined background in maritime engineering and legal practice. Before becoming a lawyer, he worked for many years in sea service, ship supervision, marine technical management and machinery management.',
      'In maritime disputes, he can read technical materials in their industry context and organize logs, VDR data, machinery reports, repair records and related documents into facts usable in litigation, arbitration and negotiation.',
    ],
    profile: [
      ['Current Role', 'Partner, Shanghai Haizhong Law Firm'],
      ['Practice', 'Litigation/arbitration, maritime, corporate and commercial, compliance and contract review, family wealth, IP and liquidation'],
      ['Technical Background', 'Chief engineer, machinery management and ship supervision'],
      ['Office', 'Room 2601, 26/F, United Mansion, No. 2668 Zhongshan North Road, Putuo District, Shanghai'],
    ],
    portraitAlt: 'Lawyer Zhang Jian',
    portraitName: 'Lawyer Zhang Jian',
    portraitDesc: 'Partner at Shanghai Haizhong Law Firm, with chief engineer and marine technical management experience.',
    experienceTitle: 'Professional Experience',
    experienceLabel: 'Experience',
    experiences: [
      {
        period: 'Apr 2025 - Present',
        role: 'Partner',
        company: 'Shanghai Haizhong Law Firm',
        desc: 'Focuses on maritime litigation, offshore wind project litigation and arbitration, while handling IP, corporate commercial, M&A and bankruptcy liquidation matters.',
      },
      {
        period: 'Jun 2023 - Mar 2025',
        role: 'Partner',
        company: 'Yingke Law Firm Shanghai Office',
        desc: 'Provided maritime legal advice and dispute services for cross-border clients, with work involving corporate commercial and private wealth matters.',
      },
      {
        period: 'Sep 2019 - May 2023',
        role: 'Litigation Lawyer',
        company: 'Tahota Law Firm Shanghai Office',
        desc: 'Handled maritime, admiralty, non-contentious and litigation matters, and served as retained counsel for several import and export trading companies.',
      },
      {
        period: 'Jul 2016 - Aug 2019',
        role: 'Litigation Lawyer / Director Assistant',
        company: 'Jiangsu Ligao Law Firm',
        desc: 'Worked on commercial arbitration, criminal, civil litigation and non-contentious procedures, with experience in advocacy, negotiation and legal drafting.',
      },
      {
        period: 'Since May 2000',
        role: 'Chief Engineer / Shipbuilding Supervisor / Technical Supervisor / Machinery Manager',
        company: 'International shipowners and ship management companies',
        desc: 'Served shipping enterprises including MK(JAPAN), SINOTRANS(H.K.), CSL(JAPAN), P&F(S.KOREA), PIL(SINGAPORE) and BSM(Germany).',
      },
    ],
    educationTitle: 'Education',
    education: [
      { year: '1986 - 1990', school: 'Guangzhou Maritime University', major: 'Marine Engineering' },
      { year: '2008 - 2012', school: 'Nanjing University', major: 'Law' },
      { year: '2022 - 2024', school: 'Dalian Maritime University', major: 'Marine Engineering' },
    ],
    coreLabel: 'Core Profile',
    coreTitle: 'A lawyer with long-term experience in ship technical operations, not only a general familiarity with shipping.',
    coreDesc:
      'In machinery damage, collision, cargo loss and offshore engineering claims, technical facts, evidence and legal liability are often intertwined. This combined background helps identify the disputed facts earlier and more accurately.',
  },
}

export default function AboutMe() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)

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
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-ink/70">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-3">
              {copy.profile.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6.8rem_1fr] border-t border-ink/10 py-4 text-sm sm:grid-cols-[8rem_1fr]">
                  <span className="font-medium text-brass">{label}</span>
                  <span className="text-ink/75">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft">
              <img src={portrait} alt={copy.portraitAlt} className="aspect-[4/5] w-full object-cover object-[center_top]" />
              <div className="border-t border-ink/10 p-5">
                <p className="font-serif text-2xl font-semibold text-ink">{copy.portraitName}</p>
                <p className="mt-2 text-sm leading-6 text-ink/60">{copy.portraitDesc}</p>
              </div>
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
              <h3 className="font-serif text-3xl font-semibold text-ink">{copy.experienceTitle}</h3>
              <span className="text-sm text-ink/40">{copy.experienceLabel}</span>
            </div>
            <div className="space-y-0">
              {copy.experiences.map((item) => (
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
                <h3 className="font-serif text-2xl font-semibold text-ink">{copy.educationTitle}</h3>
              </div>
              <div className="space-y-0">
                {copy.education.map((item) => (
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
              <p className="text-sm font-medium text-brass">{copy.coreLabel}</p>
              <p className="mt-5 font-serif text-2xl font-semibold leading-snug text-ink">{copy.coreTitle}</p>
              <p className="mt-5 text-sm leading-7 text-ink/60">{copy.coreDesc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
