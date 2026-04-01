import { CheckCircle2, MapPinned, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const details = [
  {
    icon: ShieldCheck,
    title: '가족이 이해하기 쉬운 설명',
    description:
      '서비스를 잘 아는 사람에게만 익숙한 표현보다, 실제 이용을 고민하는 보호자가 이해하기 쉬운 설명을 우선합니다.',
  },
  {
    icon: MapPinned,
    title: '지역 기반의 가까운 돌봄',
    description:
      '은평구 불광동을 중심으로 어르신의 일상과 가족의 동선을 함께 고려하는 방문형 돌봄 기관으로 소개합니다.',
  },
  {
    icon: CheckCircle2,
    title: '과장하지 않는 안내',
    description:
      '센터의 역할과 제공 가능한 서비스 범위를 정직하게 전달해 실제 기관 소개페이지로 이어질 수 있는 톤을 유지했습니다.',
  },
]

function AboutSection() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="센터 소개"
            title="익숙한 집에서의 일상을 지키는 방문형 돌봄 기관"
            description="보아드림노인복지센터는 어르신의 생활 공간에서 필요한 돌봄을 연결하고, 보호자와 가족이 상황을 이해하고 결정할 수 있도록 상담과 안내를 함께 제공하는 기관이라는 인상을 중심으로 구성했습니다."
          />
        </div>

        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-[#f3e1d5] bg-white p-7 shadow-[0_20px_50px_rgba(145,85,47,0.06)] sm:p-8">
            <p className="text-base leading-8 text-[#856658]">
              가족에게 돌봄은 정보만으로 결정하기 어려운 일입니다. 그래서 이
              페이지는 단순히 서비스 명칭을 나열하기보다,{' '}
              <strong className="font-semibold text-[#5a3724]">
                상담의 시작부터 실제 이용까지의 흐름이 편안하게 읽히는 소개형
                홈페이지
              </strong>
              로 설계했습니다.
            </p>
            <p className="mt-5 text-base leading-8 text-[#856658]">
              화면 구성은 추후 공지, 센터 소식, 블로그 연동, 지도 연결, 관리자
              기능이 추가되어도 자연스럽게 확장될 수 있도록 섹션 단위 구조와
              데이터 분리 방식을 적용했습니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-[#f3e1d5] bg-[#fff8f4] p-6"
                >
                  <Icon size={24} className="text-[#df7a4f]" />
                  <h3 className="mt-5 font-serif-ko text-xl text-[#5a3724]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#856658]">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
