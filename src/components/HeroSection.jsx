import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '../data/siteContent'

function HeroSection() {
  return (
    <section id="top" className="px-5 pb-10 pt-6 sm:px-8 lg:px-12 lg:pb-16 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative overflow-hidden rounded-[2.4rem] border border-[#f1ddd3] shadow-[0_30px_70px_rgba(145,85,47,0.14)]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(56,38,30,0.62) 0%, rgba(56,38,30,0.40) 32%, rgba(56,38,30,0.12) 56%, rgba(56,38,30,0.06) 100%), url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="px-8 py-14 sm:px-12 sm:py-20 lg:min-h-[680px] lg:px-16 lg:py-24">
            <div className="max-w-[38rem] space-y-6 lg:space-y-8">
              <img
                src="/boadream-logo.jpg"
                alt="보아드림노인복지센터"
                className="h-14 w-auto rounded-md bg-white/82 object-contain p-2 shadow-sm sm:h-16"
              />

              <h1 className="font-serif-ko text-[2.6rem] leading-[1.18] tracking-[-0.02em] text-white sm:text-[3.4rem] lg:text-[4.5rem] lg:leading-[1.16]">
                보호자에게는 안심을,
                <br />
                어르신께는 편안한 일상을
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                익숙한 집에서의 일상을 지키며, 필요한 돌봄과 상담 안내를
                자연스럽게 연결하는 보아드림노인복지센터 소개 페이지입니다.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${contact.phone.replaceAll('-', '')}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#5a3724] transition hover:bg-[#fff3ea]"
                >
                  <Phone size={18} />
                  전화상담
                </a>
                <a
                  href={contact.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16"
                >
                  블로그 바로가기
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
