import { processSteps } from '../data/siteContent'
import SectionHeading from './SectionHeading'

function ProcessSection() {
  return (
    <section
      id="guide"
      className="bg-[linear-gradient(180deg,_#fffaf6,_#fff3ea)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="이용 안내"
          title="처음 문의하셔도 흐름을 이해하기 쉬운 이용 절차"
          description="서비스를 처음 알아보는 가족도 부담 없이 읽을 수 있도록 상담에서 돌봄 시작까지의 과정을 단계형으로 정리했습니다."
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-[#f3e1d5] bg-white p-6 shadow-[0_20px_45px_rgba(145,85,47,0.06)]"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-[#df7a4f]">
                STEP {item.step}
              </p>
              <h3 className="mt-5 font-serif-ko text-2xl text-[#5a3724]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#856658]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
