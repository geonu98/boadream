import {
  Clock3,
  Mail,
  MapPinned,
  Phone,
  Route,
  SquareArrowOutUpRight,
} from 'lucide-react'
import { contact } from '../data/siteContent'
import SectionHeading from './SectionHeading'

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#654338] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div id="consultation">
          <SectionHeading
            eyebrow="오시는 길 · 문의"
            title="상담이 필요하실 때 가장 먼저 닿는 안내 창구"
            description="전화 문의, 블로그 방문, 위치 확인까지 자연스럽게 이어지도록 실제 운영에 가까운 연락 정보를 정리했습니다."
            tone="dark"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={`tel:${contact.phone.replaceAll('-', '')}`}
              className="rounded-[1.6rem] border border-white/12 bg-white/6 p-5 transition hover:bg-white/12"
            >
              <Phone size={22} className="text-[#ffd8c2]" />
              <p className="mt-4 text-sm text-white/65">전화번호</p>
              <p className="mt-1 text-xl font-semibold">{contact.phone}</p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-[1.6rem] border border-white/12 bg-white/6 p-5 transition hover:bg-white/12"
            >
              <Mail size={22} className="text-[#ffd8c2]" />
              <p className="mt-4 text-sm text-white/65">이메일</p>
              <p className="mt-1 break-all text-xl font-semibold">
                {contact.email}
              </p>
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/12 bg-[#7a5242] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-5">
              <div className="rounded-[1.6rem] bg-[#8b5d4b] p-6">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 text-[#ffd8c2]" size={22} />
                  <div>
                    <p className="text-sm text-white/65">주소</p>
                    <p className="mt-2 text-lg leading-8">{contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="flex gap-3 rounded-[1.4rem] bg-white/6 p-4">
                  <Clock3 className="mt-1 text-[#ffd8c2]" size={20} />
                  <div>
                    <p className="text-sm text-white/65">운영시간</p>
                    <p className="mt-1 leading-7">{contact.hours}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-[1.4rem] bg-white/6 p-4">
                  <Route className="mt-1 text-[#ffd8c2]" size={20} />
                  <div>
                    <p className="text-sm text-white/65">교통 안내</p>
                    <ul className="mt-1 space-y-1 leading-7 text-white/88">
                      {contact.transport.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[1.6rem] bg-[linear-gradient(180deg,_rgba(255,194,160,0.10),_rgba(255,255,255,0.04))] p-5">
              <div>
                <p className="text-sm font-semibold tracking-[0.24em] text-[#ffd8c2] uppercase">
                  Location
                </p>
                <div className="mt-5 rounded-[1.4rem] border border-dashed border-white/18 bg-[#5f3f34] p-5">
                  <div className="aspect-[4/3] rounded-[1.1rem] bg-[radial-gradient(circle_at_30%_30%,_rgba(255,216,194,0.24),_transparent_25%),linear-gradient(145deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.01))] p-5">
                    <div className="flex h-full flex-col justify-between rounded-[0.9rem] border border-white/10 p-5">
                      <div className="space-y-2">
                        <p className="text-sm text-white/65">지도 연결 예정 영역</p>
                        <p className="font-serif-ko text-2xl">불광역 인근</p>
                      </div>
                      <p className="max-w-[15rem] text-sm leading-7 text-white/80">
                        현재는 정적 시안용 플레이스홀더이며, 이후 지도 임베드나
                        외부 지도 링크로 쉽게 확장할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={contact.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-full bg-white px-5 py-4 text-sm font-semibold text-[#5a3724]"
                >
                  위치 확인하기
                  <SquareArrowOutUpRight size={17} />
                </a>
                <a
                  href={contact.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-full border border-white/12 px-5 py-4 text-sm font-semibold text-white"
                >
                  블로그 방문하기
                  <SquareArrowOutUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
