import { useState } from "react";
import Seo from "../shared/seo/Seo";

const recruitTabs = [
  {
    id: "recruit-info",
    label: "채용안내",
    copy:
      '안녕하세요. 서울시 은평구 불광동에 위치한 "보아드림노인복지센터"에서 따뜻한 마음으로 내 부모처럼 모실 요양보호사님을 모집합니다. 많은 지원 바랍니다.',
    bullets: [
      "채용직종 : 요양보호사",
      "필수 : 5등급 치매전문교육 이수한 요양보호사",
      "근무요일 : 화, 수, 금, 토 / 주 4일 (월X, 목X)",
      "근무시간 : 오후 1시 ~ 오후 4시 (3시간)",
      "시급 : 12,700원",
    ],
    tags: ["불광동", "주4일", "치매전문교육 필수", "시급 12,700원"],
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    alt: "따뜻한 분위기의 돌봄 상담 이미지",
  },
  {
    id: "recruit-process",
    label: "지원절차",
    copy:
      "지원방법은 보아드림노인복지센터 사무실 전화 문의입니다. 현재 모집 상황과 근무 가능 여부를 먼저 확인한 뒤, 필요한 내용을 차근차근 안내해드립니다.",
    bullets: [
      "지원방법 : 보아드림노인복지센터 사무실 전화",
      "대표번호 : 02-352-0088",
      "전화 문의 후 근무 가능 여부 및 일정 안내",
      "우편 수령 전, 전화 문의로 추가 확인 가능",
    ],
    tags: ["전화 문의", "02-352-0088", "지원 상담", "채용 안내"],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    alt: "근무 상담을 상징하는 이미지",
  },
  {
    id: "recruit-value",
    label: "근무내용",
    copy:
      "업무는 5등급 어르신댁에서 워크북을 활용한 인지지원활동과 가사 및 일상생활 지원입니다. 어르신을 존중하는 마음과 차분한 소통, 책임 있는 태도를 중요하게 생각합니다.",
    bullets: [
      "업무 : 인지지원활동, 가사 및 일상생활 지원",
      "근무장소 : 은평구 통일로 780 미성아파트(불광동)",
      "교통편 : 불광역 8번출구 도보 3분",
      "내 부모처럼 모시는 따뜻한 돌봄 태도 중요",
    ],
    tags: ["인지지원활동", "가사 지원", "불광역 8번출구", "따뜻한 돌봄"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    alt: "돌봄 현장의 따뜻한 분위기 이미지",
  },
];

export default function RecruitPage() {
  const [activeTab, setActiveTab] = useState(recruitTabs[0].id);
  const currentTab = recruitTabs.find((tab) => tab.id === activeTab) ?? recruitTabs[0];

  return (
    <main className="recruit-page recruit-page-tabbed">
      <Seo page="recruit" />
      <section className="section section-steps recruit-steps-section">
        <div className="container">
          <div className="section-title-wrap section-title-left reveal-up">
            <p className="pre-title">(채용안내)</p>
            <h2 className="section-title recruit-page-title">
              따뜻한 돌봄을 함께 이어갈
              <span>동료를 기다립니다</span>
            </h2>
          </div>

          <div className="step-shell recruit-step-shell reveal-up">
            <div className="step-tabs" role="tablist" aria-label="채용안내">
              {recruitTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`step-tab${tab.id === activeTab ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="step-panels">
              <div className="step-panel is-active recruit-step-panel">
                <div className="step-copy recruit-step-copy">
                  <p>{currentTab.copy}</p>
                  <ul>
                    {currentTab.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="step-tags recruit-step-tags">
                    {currentTab.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="step-visual recruit-step-visual">
                  <img src={currentTab.image} alt={currentTab.alt} />
                  <div className="glass-mini-card recruit-glass-card recruit-glass-card-static">
                    <h3>채용안내</h3>
                    <span>따뜻한 마음으로 내 부모처럼 모실 요양보호사님을 모집합니다.</span>
                    <a href="tel:023520088">전화로 지원 문의하기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
