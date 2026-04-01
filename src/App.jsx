import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import { contact, navItems } from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen bg-[#fffaf6] text-[#4c3428]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <NewsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-[#f2ddd2] bg-[#fffaf6] px-5 py-10 text-[#8b6958] sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-[#5d3d31] px-6 py-7 text-white shadow-[0_24px_60px_rgba(93,61,49,0.18)] sm:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.22em] text-[#ffd9c5] uppercase">
                Consultation
              </p>
              <h2 className="mt-3 font-serif-ko text-3xl leading-[1.3] text-white lg:text-[2.4rem]">
                돌봄이 필요하신 상황이라면
                <br />
                편안하게 상담부터 시작해 보세요
              </h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <a
                href={`tel:${contact.phone.replaceAll('-', '')}`}
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5a3724]"
              >
                전화 상담
              </a>
              <a
                href={contact.blog}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
              >
                블로그 보기
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-10 border-t border-[#f2ddd2] pt-10 lg:grid-cols-[1.2fr_0.6fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <img
                src="/boadream-logo.jpg"
                alt="보아드림노인복지센터"
                className="h-12 w-auto object-contain"
              />
              <p className="max-w-md text-sm leading-7">
                보아드림노인복지센터는 어르신의 생활 공간에서 필요한 돌봄을
                연결하고, 보호자와 가족이 상황을 이해하고 결정할 수 있도록
                상담과 안내를 함께 제공하는 기관이라는 인상을 중심으로
                구성했습니다.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#5a3724]">바로가기</p>
              <div className="mt-4 space-y-2 text-sm leading-7">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block hover:text-[#d46d41]">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#5a3724]">센터 정보</p>
              <div className="mt-4 space-y-2 text-sm leading-7">
                <p>설립일 2023.04.01</p>
                <p>운영시간 월-토 09:00-18:00</p>
                <p>상담 전화 {contact.phone}</p>
                <p>이메일 {contact.email}</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#5a3724]">오시는 길</p>
              <div className="mt-4 space-y-2 text-sm leading-7">
                <p>{contact.address}</p>
                <a href={contact.map} target="_blank" rel="noreferrer" className="block hover:text-[#d46d41]">
                  지도 바로가기
                </a>
                <a href={contact.blog} target="_blank" rel="noreferrer" className="block hover:text-[#d46d41]">
                  블로그 바로가기
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[#f2ddd2] pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>본 페이지는 보아드림노인복지센터 소개용 시안입니다.</p>
            <p>Boa Dream Senior Care Center</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
