import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

const pricingTabs = [
  {
    id: "pricing-fee",
    label: "이용 금액 안내",
    copy:
      "장기요양등급과 실제 이용 형태에 따라 본인부담금이 달라질 수 있어, 상담 시 가장 알기 쉽게 기준부터 정리해드립니다.",
    bullets: [
      "등급과 서비스 종류에 따라 본인부담률 안내",
      "방문요양 · 방문목욕 이용 기준 설명",
      "실제 이용 흐름에 맞춘 비용 상담 진행",
      "상담 후 상세 비용과 절차를 한 번 더 정리",
    ],
    tags: ["본인부담률 안내", "방문요양", "방문목욕", "상세 비용 상담"],
    image: "/care-support-illustration.png",
    alt: "돌봄 안내를 상징하는 일러스트",
    cardTitle: "이용 금액 안내",
    cardText: "복잡한 기준 대신 실제 이용에 필요한 내용을 차근차근 설명해드립니다.",
    buttonLabel: "상담 후 상세 비용 안내",
  },
  {
    id: "pricing-point",
    label: "상담 포인트",
    copy:
      "처음 문의하셔도 복잡하지 않게, 어떤 서비스가 가능한지와 어떤 절차가 필요한지 순서대로 설명해드립니다.",
    bullets: [
      "현재 상황에 맞는 서비스 가능 여부 확인",
      "필요한 절차와 준비 내용을 먼저 안내",
      "비용이 어느 정도인지 상담 중심으로 설명",
      "보호자 기준에서 이해하기 쉽게 정리",
    ],
    tags: ["처음 문의", "절차 안내", "비용 설명", "보호자 중심 상담"],
    image: "/care-support-illustration.png",
    alt: "상담 흐름을 상징하는 일러스트",
    cardTitle: "상담 포인트",
    cardText: "처음 문의하셔도 필요한 내용부터 빠르게 짚어드립니다.",
    buttonLabel: "방문요양 · 방문목욕 모두 문의 가능",
  },
  {
    id: "pricing-call",
    label: "대표 상담",
    copy:
      "요금 문의만 먼저 주셔도 괜찮습니다. 필요한 기준을 먼저 듣고, 어르신 상황에 맞게 대표 상담으로 빠르게 안내해드립니다.",
    bullets: [
      "전화 한 통으로 기본 이용 기준 확인 가능",
      "장기요양등급 여부와 상관없이 상담 가능",
      "필요한 서비스 범위와 비용 흐름 먼저 정리",
      "대표번호 02-352-0088로 빠른 안내 진행",
    ],
    tags: ["대표번호 02-352-0088", "빠른 확인", "맞춤형 안내", "전화 상담"],
    image: "/care-support-illustration.png",
    alt: "전화 상담을 상징하는 일러스트",
    cardTitle: "대표 상담",
    cardText: "전화로 가장 빠르게 확인하실 수 있습니다.",
    buttonLabel: "TEL 02-352-0088",
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(pricingTabs[0].id);
  const currentTab = pricingTabs.find((tab) => tab.id === activeTab) ?? pricingTabs[0];

  return (
    <main className="pricing-page pricing-page-tabbed">
      <section className="section section-steps pricing-steps-section">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(이용 금액 안내)"
            title="부담은 덜고"
            highlight="안내는 더 명확하게"
          />
          <p className="page-lead reveal-up pricing-page-lead">
            복잡한 기준 대신, 실제 이용에 필요한 내용 중심으로 차근차근 설명해드립니다.
          </p>

          <div className="step-shell pricing-step-shell reveal-up">
            <div className="step-tabs pricing-step-tabs" role="tablist" aria-label="이용 금액 안내">
              {pricingTabs.map((tab) => (
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
              <div className="step-panel is-active pricing-step-panel">
                <div className="step-copy pricing-step-copy">
                  <p>{currentTab.copy}</p>
                  <ul>
                    {currentTab.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="step-tags pricing-step-tags">
                    {currentTab.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="step-visual pricing-step-visual">
                  <img src={currentTab.image} alt={currentTab.alt} />
                  <div className="glass-mini-card pricing-glass-card pricing-glass-card-static">
                    <h3>{currentTab.cardTitle}</h3>
                    <span>{currentTab.cardText}</span>
                    <button type="button">{currentTab.buttonLabel}</button>
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
