import { Bath, ClipboardList, House } from 'lucide-react'
import { services } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const icons = [House, Bath, ClipboardList]

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="제공 서비스"
          title="필요한 돌봄을 차분하게 안내하는 서비스 구성"
          description="방문요양과 방문목욕, 장기요양 상담을 각각 분리해 보여주되 서로 자연스럽게 연결되도록 카드형 섹션으로 정리했습니다."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]

            return (
              <article
                key={service.title}
                className="group rounded-[2rem] border border-[#f3e1d5] bg-white p-7 shadow-[0_20px_50px_rgba(145,85,47,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(145,85,47,0.10)]"
              >
                <div className="inline-flex rounded-2xl bg-[#fff1e7] p-4 text-[#df7a4f] transition group-hover:bg-[#ffe5d2]">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 font-serif-ko text-2xl text-[#5a3724]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#856658]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-[#f7e8de] pt-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-[#6f5649]"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#df7a4f]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
