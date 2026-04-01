import { ChevronDown, Phone } from 'lucide-react'
import { navItems } from '../data/siteContent'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f3dfd4] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="shrink-0">
          <img
            src="/boadream-logo.jpg"
            alt="보아드림노인복지센터 로고"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navItems.slice(0, 5).map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 text-[15px] font-medium text-[#5b3c2d] transition hover:text-[#df7a4f]"
            >
              {item.label}
              {index === 1 ? <ChevronDown size={15} strokeWidth={2.2} /> : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:023520088"
            className="hidden items-center gap-2 text-sm font-medium text-[#5b3c2d] xl:inline-flex"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0dc] text-[#e89c3d]">
              <Phone size={16} />
            </span>
            02-352-0088
          </a>
          <a
            href="tel:023520088"
            className="hidden items-center gap-2 rounded-full bg-[#2d201a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#473128] sm:inline-flex"
          >
            상담 문의
          </a>
          <a
            href="tel:023520088"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f3dfd4] bg-white text-[#5a3724] lg:hidden"
            aria-label="전화상담"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
