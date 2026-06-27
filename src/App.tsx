import { useState } from 'react'
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

const navItems = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '律师简介' },
  { href: '#advantage', label: '专业优势' },
  { href: '#services', label: '业务领域' },
  { href: '#contact', label: '联系咨询' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-brass selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="张健律师首页">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-ink bg-ink text-sm font-semibold text-white">
              张
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-semibold text-ink">张健律师</span>
              <span className="block text-xs text-ink/55">海事海商 · 复杂商事争议</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-ink/70 transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:15861989012"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-ink/20 px-4 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"
            >
              <PhoneCall className="h-4 w-4" />
              电话咨询
            </a>
            <a
              href="mailto:1603919188@qq.com"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-sea"
            >
              <Mail className="h-4 w-4" />
              发送邮件
            </a>
          </div>

          <button
            type="button"
            aria-label="切换导航"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/20 bg-white text-ink lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className={`overflow-hidden border-t border-ink/10 bg-paper transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
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
              电话咨询
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
            <p className="font-serif text-2xl font-semibold">张健律师</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
              上海海仲律师事务所合伙人律师，资深轮机长、机务管理背景。聚焦海事海商、海上风电争议、公司商务与复杂争议解决。
            </p>
          </div>
          <div className="grid gap-2 text-sm text-white/60 lg:text-right">
            <p>电话：158 6198 9012</p>
            <p>邮箱：1603919188@qq.com</p>
            <p>© 2026 Zhang Jian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
