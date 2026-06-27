import { useEffect, useState } from 'react'
import { Mail, Menu, PhoneCall, X } from 'lucide-react'
import Hero from './components/Hero'
import Quote from './components/Quote'
import AboutMe from './components/AboutMe'
import Advantage from './components/Advantage'
import Credentials from './components/Credentials'
import Services from './components/Services'
import Cases from './components/Cases'
import TrustSection from './components/TrustSection'
import Contact from './components/Contact'
import { Lang, LanguageProvider } from './language'

const appCopy = {
  zh: {
    homeAria: '张健律师首页',
    mark: '张',
    name: '张健律师',
    subtitle: '诉讼仲裁 · 复杂争议解决',
    nav: [
      { href: '#home', label: '首页' },
      { href: '#about', label: '律师简介' },
      { href: '#advantage', label: '专业背景' },
      { href: '#services', label: '业务领域' },
      { href: '#contact', label: '联系咨询' },
    ],
    call: '电话咨询',
    email: '发送邮件',
    menu: '切换导航',
    switchLanguage: '切换语言',
    footerDesc: '上海海仲律师事务所合伙人律师，资深轮机长、机务管理背景。主要办理诉讼、仲裁及相关争议解决事务。',
    phoneLabel: '电话',
    emailLabel: '邮箱',
    addressLabel: '地址',
    address: '上海市普陀区中山北路2668号联合大厦26楼2601室',
  },
  en: {
    homeAria: 'Lawyer Zhang Jian home',
    mark: 'ZJ',
    name: 'Lawyer Zhang Jian',
    subtitle: 'Litigation · Arbitration · Complex Disputes',
    nav: [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'Profile' },
      { href: '#advantage', label: 'Background' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
    call: 'Call',
    email: 'Email',
    menu: 'Toggle navigation',
    switchLanguage: 'Switch language',
    footerDesc:
      'Partner at Shanghai Haizhong Law Firm, with chief engineer and marine technical management experience. Practice focuses on litigation, arbitration and related dispute resolution matters.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Office',
    address: 'Room 2601, 26/F, United Mansion, No. 2668 Zhongshan North Road, Putuo District, Shanghai',
  },
}

function LanguageToggle({ lang, setLang, label }: { lang: Lang; setLang: (lang: Lang) => void; label: string }) {
  const optionClass = (active: boolean) =>
    `h-8 rounded-sm px-3 text-xs font-semibold transition-colors ${
      active ? 'bg-ink text-white shadow-sm' : 'text-ink/55 hover:bg-white hover:text-ink'
    }`

  return (
    <div className="inline-flex h-11 items-center rounded-md border border-ink/15 bg-white/70 p-1" aria-label={label}>
      <button type="button" aria-pressed={lang === 'zh'} onClick={() => setLang('zh')} className={optionClass(lang === 'zh')}>
        中
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} className={optionClass(lang === 'en')}>
        EN
      </button>
    </div>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('zh')
  const copy = appCopy[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = lang === 'zh' ? '张健律师｜诉讼仲裁与复杂争议解决' : 'Lawyer Zhang Jian | Litigation and Arbitration'
  }, [lang])

  const handleSetLang = (nextLang: Lang) => {
    setLang(nextLang)
    setMobileMenuOpen(false)
  }

  return (
    <LanguageProvider value={lang}>
      <div className="min-h-screen bg-paper text-ink antialiased selection:bg-brass selection:text-white">
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
          <div className="section-shell flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-3" aria-label={copy.homeAria}>
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-ink bg-ink text-sm font-semibold text-white">
                {copy.mark}
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold text-ink">{copy.name}</span>
                <span className="block text-xs text-ink/55">{copy.subtitle}</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              {copy.nav.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-ink/70 transition-colors hover:text-ink">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageToggle lang={lang} setLang={handleSetLang} label={copy.switchLanguage} />
              <a
                href="tel:15861989012"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-ink/20 px-4 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"
              >
                <PhoneCall className="h-4 w-4" />
                {copy.call}
              </a>
              <a
                href="mailto:zhangjian@hzlawcn.com"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-sea"
              >
                <Mail className="h-4 w-4" />
                {copy.email}
              </a>
            </div>

            <button
              type="button"
              aria-label={copy.menu}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 bg-white text-ink lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className={`overflow-hidden border-t border-ink/10 bg-paper transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'max-h-[34rem]' : 'max-h-0'}`}>
            <div className="section-shell grid gap-2 py-4">
              <LanguageToggle lang={lang} setLang={handleSetLang} label={copy.switchLanguage} />
              {copy.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-ink/75 transition-colors hover:bg-white hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:15861989012"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-white"
              >
                <PhoneCall className="h-4 w-4" />
                {copy.call}
              </a>
            </div>
          </div>
        </nav>

        <main>
          <Hero />
          <Quote />
          <AboutMe />
          <Advantage />
          <Credentials />
          <Services />
          <Cases />
          <TrustSection />
          <Contact />
        </main>

        <footer className="border-t border-white/10 bg-ink py-12 text-white">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-serif text-2xl font-semibold">{copy.name}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{copy.footerDesc}</p>
            </div>
            <div className="grid gap-2 text-sm text-white/60 lg:text-right">
              <p>{copy.phoneLabel}: 158 6198 9012 / 183 0193 8689</p>
              <p>{copy.emailLabel}: zhangjian@hzlawcn.com</p>
              <p>{copy.addressLabel}: {copy.address}</p>
              <p>© 2026 Zhang Jian. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}

export default App
