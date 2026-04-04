import { ArrowUpRight, Newspaper } from 'lucide-react'
import { newsItems } from '../data/siteContent'
import SectionHeading from './SectionHeading'

function NewsSection() {
  return (
    <section id="news" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="센터 소식"
          title="블로그와 자연스럽게 이어지는 정보형 소식 섹션"
          description="보아드림 블로그의 공지·안내·정보성 흐름을 그대로 복붙하지 않고, 홈페이지 메인에서 읽기 좋도록 재정리한 카드형 영역입니다."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.9rem] border border-[#f3e1d5] bg-white p-7 shadow-[0_18px_40px_rgba(145,85,47,0.04)]"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3ea] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#df7a4f] uppercase">
                <Newspaper size={14} />
                {item.category}
              </div>
              <h3 className="mt-6 font-serif-ko text-2xl leading-snug text-[#5a3724]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#856658]">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d46d41] transition hover:text-[#5a3724]"
              >
                블로그에서 보기
                <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
