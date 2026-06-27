import { FormEvent, useState } from 'react'
import { ClipboardList, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

const initialForm = {
  name: '',
  phone: '',
  company: '',
  matter: '海事海商争议',
  message: '',
}

const checklist = ['合同、提单、保单等基础文件', '航海日志、轮机日志、VDR 或 AIS 资料', '事故照片、检验报告、维修记录', '往来函件、付款凭证、损失清单']

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `网站咨询：${form.name || '案件评估'}`
    const body = [
      `称呼：${form.name}`,
      `电话：${form.phone}`,
      `公司/主体：${form.company || '未填写'}`,
      `事项类型：${form.matter}`,
      '',
      '案件简述：',
      form.message,
    ].join('\n')

    window.location.href = `mailto:1603919188@qq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-white py-24 md:py-28 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div>
            <p className="eyebrow">联系咨询</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl">
              案件越复杂，
              <br />
              越需要尽早判断。
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-ink/60">
              如涉及船舶扣押、证据固定、海事时效、保险拒赔或工程索赔，建议先进行关键事实和材料状态评估，再决定后续动作。
            </p>

            <div className="mt-10 grid gap-4">
              <a href="tel:15861989012" className="group flex items-center gap-4 rounded-md border border-ink/10 bg-paper p-5 transition-colors hover:border-brass/50 hover:bg-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white transition-colors group-hover:bg-sea">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">电话</span>
                  <span className="mt-1 block font-serif text-2xl font-semibold text-ink">158 6198 9012</span>
                </span>
              </a>

              <a href="mailto:1603919188@qq.com" className="group flex items-center gap-4 rounded-md border border-ink/10 bg-paper p-5 transition-colors hover:border-brass/50 hover:bg-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ink text-white transition-colors group-hover:bg-sea">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">邮箱</span>
                  <span className="mt-1 block font-serif text-xl font-semibold text-ink">1603919188@qq.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-md border border-ink/10 bg-paper p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-sea text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">微信</span>
                  <span className="mt-1 block font-serif text-xl font-semibold text-ink">zj15861989012</span>
                </span>
              </div>

              <div className="flex items-start gap-4 rounded-md border border-ink/10 bg-paper p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brass text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink/50">办公区域</span>
                  <span className="mt-1 block font-serif text-xl font-semibold text-ink">上海市浦东新区</span>
                  <span className="mt-1 block text-sm text-ink/60">上海海仲律师事务所</span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit} className="rounded-md border border-ink/10 bg-paper p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink">
                  称呼
                  <input
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    required
                    className="h-12 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass"
                    placeholder="例如：王先生"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink">
                  电话
                  <input
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    required
                    className="h-12 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass"
                    placeholder="便于回电沟通"
                  />
                </label>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink">
                  公司/主体
                  <input
                    value={form.company}
                    onChange={(event) => updateField('company', event.target.value)}
                    className="h-12 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass"
                    placeholder="选填"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-ink">
                  事项类型
                  <select
                    value={form.matter}
                    onChange={(event) => updateField('matter', event.target.value)}
                    className="h-12 rounded-md border border-ink/10 bg-white px-4 text-sm outline-none transition-colors focus:border-brass"
                  >
                    <option>海事海商争议</option>
                    <option>海上风电争议</option>
                    <option>机损与保险理赔</option>
                    <option>公司商务与常法</option>
                    <option>并购重组与清算</option>
                    <option>私人财富与家事</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-medium text-ink">
                案件简述
                <textarea
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  required
                  rows={6}
                  className="resize-none rounded-md border border-ink/10 bg-white px-4 py-3 text-sm leading-7 outline-none transition-colors focus:border-brass"
                  placeholder="请简要说明争议背景、对方主体、关键时间节点和目前已有材料。"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-sea md:w-auto"
              >
                <Send className="h-4 w-4" />
                发送咨询邮件
              </button>
            </form>

            <div className="rounded-md border border-ink/10 bg-ink p-6 text-white md:p-8">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-5 w-5 text-brass-light" />
                <p className="font-serif text-2xl font-semibold">初次沟通可准备</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="border-t border-white/20 pt-3 text-sm leading-6 text-white/70">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border-t border-white/20 pt-5 text-xs leading-6 text-white/50">
                本网站展示内容仅用于了解律师服务方向，不构成针对具体案件的正式法律意见。正式意见以委托后结合完整材料出具为准。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
