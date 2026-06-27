import { FormEvent, useEffect, useState } from 'react'
import { ClipboardList, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { pick, useLanguage } from '../language'

const initialForm = {
  name: '',
  phone: '',
  company: '',
  matter: '',
  message: '',
}

const copyByLang = {
  zh: {
    eyebrow: '联系咨询',
    title: ['案件越复杂，', '越需要尽早判断。'],
    intro: '如涉及诉讼时效、财产保全、证据固定、管辖选择、保险拒赔、工程索赔或执行回款，建议先进行事实和材料状态评估，再确定下一步处理路径。',
    phone: '电话',
    email: '邮箱',
    wechat: '微信',
    office: '办公地址',
    addressLine1: '上海市普陀区中山北路2668号',
    addressLine2: '联合大厦26楼2601室 · 上海海仲律师事务所',
    labels: {
      name: '称呼',
      phone: '电话',
      company: '公司/主体',
      matter: '事项类型',
      message: '案件简述',
      submit: '发送咨询邮件',
    },
    placeholders: {
      name: '例如：王先生',
      phone: '便于回电沟通',
      company: '选填',
      message: '请简要说明争议背景、对方主体、关键时间节点和目前已有材料。',
    },
    matterOptions: [
      '诉讼/仲裁争议',
      '海事海商诉讼/仲裁',
      '民商事合同诉讼',
      '公司股权、合规与合同审查',
      '建设工程与海上风电争议',
      '知识产权与商业秘密',
      '婚姻家事与财富争议',
      '破产清算与执行',
      '重大复杂诉讼综合代理',
    ],
    mail: {
      subjectPrefix: '网站咨询',
      defaultSubject: '案件评估',
      name: '称呼',
      phone: '电话',
      company: '公司/主体',
      empty: '未填写',
      matter: '事项类型',
      message: '案件简述',
    },
    checklistTitle: '初次沟通可准备',
    checklist: ['合同、协议、订单、保单、提单等基础文件', '付款凭证、对账单、往来函件或聊天记录', '事故照片、检验报告、维修记录或技术资料', '裁判文书、保全材料、执行线索、损失清单'],
    disclaimer: '本网站展示内容仅用于了解律师服务方向，不构成针对具体案件的正式法律意见。正式意见以委托后结合完整材料出具为准。',
  },
  en: {
    eyebrow: 'Contact',
    title: ['The more complex the case,', 'the earlier the assessment matters.'],
    intro:
      'If limitation periods, asset preservation, evidence preservation, jurisdiction, insurance denial, engineering claims or enforcement recovery may be involved, an early review of facts and materials is recommended before deciding the next steps.',
    phone: 'Phone',
    email: 'Email',
    wechat: 'WeChat',
    office: 'Office',
    addressLine1: 'Room 2601, 26/F, United Mansion',
    addressLine2: 'No. 2668 Zhongshan North Road, Putuo District, Shanghai · Shanghai Haizhong Law Firm',
    labels: {
      name: 'Name',
      phone: 'Phone',
      company: 'Company / Party',
      matter: 'Matter Type',
      message: 'Case Summary',
      submit: 'Prepare Inquiry Email',
    },
    placeholders: {
      name: 'For example: Mr. Wang',
      phone: 'A number for follow-up',
      company: 'Optional',
      message: 'Briefly describe the dispute background, opposing party, key dates and available materials.',
    },
    matterOptions: [
      'Litigation / Arbitration Dispute',
      'Maritime Litigation / Arbitration',
      'Civil and Commercial Contract Litigation',
      'Corporate Equity, Compliance and Contract Review',
      'Construction and Offshore Wind Dispute',
      'IP and Trade Secrets',
      'Family and Private Wealth Dispute',
      'Bankruptcy, Liquidation and Enforcement',
      'Major Complex Litigation Representation',
    ],
    mail: {
      subjectPrefix: 'Website Inquiry',
      defaultSubject: 'Case Assessment',
      name: 'Name',
      phone: 'Phone',
      company: 'Company / Party',
      empty: 'Not provided',
      matter: 'Matter Type',
      message: 'Case Summary',
    },
    checklistTitle: 'Useful Materials for First Discussion',
    checklist: ['Contracts, agreements, orders, policies, bills of lading and base documents', 'Payment evidence, reconciliations, correspondence or chat records', 'Accident photos, survey reports, repair records or technical materials', 'Judgments, preservation materials, enforcement clues and loss lists'],
    disclaimer:
      'The content on this website is for understanding service areas only and does not constitute formal legal advice for any specific matter. Formal opinions should be based on complete materials after engagement.',
  },
}

export default function Contact() {
  const lang = useLanguage()
  const copy = pick(lang, copyByLang)
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    setForm((current) => ({
      ...current,
      matter: copy.matterOptions.includes(current.matter) ? current.matter : '',
    }))
  }, [copy.matterOptions])

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const matter = form.matter || copy.matterOptions[0]
    const subject = `${copy.mail.subjectPrefix}: ${form.name || copy.mail.defaultSubject}`
    const body = [
      `${copy.mail.name}: ${form.name}`,
      `${copy.mail.phone}: ${form.phone}`,
      `${copy.mail.company}: ${form.company || copy.mail.empty}`,
      `${copy.mail.matter}: ${matter}`,
      '',
      `${copy.mail.message}:`,
      form.message,
    ].join('\n')

    window.location.href = `mailto:zhangjian@hzlawcn.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section-wash bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell relative">
        <div className="grid min-w-0 gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="mt-4 break-words font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {copy.title[0]}
              <br />
              {copy.title[1]}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/60">{copy.intro}</p>

            <div className="mt-10 grid min-w-0 gap-4">
              <div className="elevated-card group flex items-center gap-4 rounded-md p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/50">
                <span className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">{copy.phone}</span>
                  <span className="mt-1 grid gap-1 font-serif text-2xl font-semibold text-ink">
                    <a href="tel:15861989012" className="transition-colors hover:text-sea">
                      158 6198 9012
                    </a>
                    <a href="tel:18301938689" className="transition-colors hover:text-sea">
                      183 0193 8689
                    </a>
                  </span>
                </span>
              </div>

              <a href="mailto:zhangjian@hzlawcn.com" className="elevated-card group flex items-center gap-4 rounded-md p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brass/50">
                <span className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-ink/50">{copy.email}</span>
                  <span className="mt-1 block break-words font-serif text-xl font-semibold text-ink">zhangjian@hzlawcn.com</span>
                </span>
              </a>

              <div className="elevated-card flex items-center gap-4 rounded-md p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sea text-white shadow-[0_14px_30px_rgba(47,111,115,0.22)]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">{copy.wechat}</span>
                  <span className="mt-1 block font-serif text-xl font-semibold text-ink">zj15861989012</span>
                </span>
              </div>

              <div className="elevated-card flex min-w-0 items-start gap-4 rounded-md p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brass text-white shadow-[0_14px_30px_rgba(183,137,52,0.22)]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-ink/50">{copy.office}</span>
                  <span className="mt-1 block break-words font-serif text-xl font-semibold leading-snug text-ink">{copy.addressLine1}</span>
                  <span className="mt-1 block break-words text-sm leading-6 text-ink/60">{copy.addressLine2}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-6">
            <form onSubmit={handleSubmit} className="elevated-card min-w-0 rounded-md p-6 md:p-8">
              <div className="grid min-w-0 gap-5 md:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
                  {copy.labels.name}
                  <input
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    required
                    className="form-field h-12 min-w-0 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass focus:shadow-[0_0_0_3px_rgba(183,137,52,0.12)]"
                    placeholder={copy.placeholders.name}
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
                  {copy.labels.phone}
                  <input
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    required
                    className="form-field h-12 min-w-0 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass focus:shadow-[0_0_0_3px_rgba(183,137,52,0.12)]"
                    placeholder={copy.placeholders.phone}
                  />
                </label>
              </div>

              <div className="mt-5 grid min-w-0 gap-5 md:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
                  {copy.labels.company}
                  <input
                    value={form.company}
                    onChange={(event) => updateField('company', event.target.value)}
                    className="form-field h-12 min-w-0 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass focus:shadow-[0_0_0_3px_rgba(183,137,52,0.12)]"
                    placeholder={copy.placeholders.company}
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-medium text-ink">
                  {copy.labels.matter}
                  <select
                    value={form.matter || copy.matterOptions[0]}
                    onChange={(event) => updateField('matter', event.target.value)}
                    className="form-field h-12 min-w-0 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass focus:shadow-[0_0_0_3px_rgba(183,137,52,0.12)]"
                  >
                    {copy.matterOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 grid min-w-0 gap-2 text-sm font-medium text-ink">
                {copy.labels.message}
                <textarea
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  required
                  rows={6}
                  className="form-field min-w-0 resize-none rounded-md border border-ink/10 bg-white px-4 py-3 text-sm leading-7 outline-none transition-colors focus:border-brass focus:shadow-[0_0_0_3px_rgba(183,137,52,0.12)]"
                  placeholder={copy.placeholders.message}
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(17,24,39,0.18)] transition-all hover:-translate-y-0.5 hover:bg-sea md:w-auto"
              >
                <Send className="h-4 w-4" />
                {copy.labels.submit}
              </button>
            </form>

            <div className="fine-frame min-w-0 rounded-md bg-ink p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-brass-light" />
                <p className="font-serif text-2xl font-semibold">{copy.checklistTitle}</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {copy.checklist.map((item) => (
                  <div key={item} className="border-t border-white/20 pt-3 text-sm leading-6 text-white/70">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border-t border-white/20 pt-5 text-xs leading-6 text-white/50">{copy.disclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
