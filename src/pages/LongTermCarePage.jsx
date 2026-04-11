import { HeartHandshake, House, UserRound } from "lucide-react";
import Seo from "../shared/seo/Seo";

const supportCards = [
  {
    key: "target",
    label: "대상",
    icon: UserRound,
    title: "장기요양인정 및 등급판정 어르신",
    description:
      "고령이나 노인성 질환으로 혼자서 일상생활을 수행하기 어려운 어르신 중 국민건강보험공단으로부터 장기요양인정 및 등급판정을 받은 분이 대상입니다.",
  },
  {
    key: "support",
    label: "지원내용",
    icon: HeartHandshake,
    title: "신체 · 가사 · 정서 · 활동 · 인지 지원",
    description:
      "신체활동, 가사 지원, 말벗과 정서 돌봄, 병원 동행과 외출 지원, 인지 자극 활동까지 상황에 맞는 재가 서비스를 제공합니다.",
  },
  {
    key: "purpose",
    label: "목적",
    icon: House,
    title: "건강증진과 생활 안정, 가족 부담 경감",
    description:
      "어르신의 건강 유지와 생활 안정, 보호자와 가족의 돌봄 부담을 덜어 일상을 지키는 데 목적이 있습니다.",
  },
];

const copaymentRates = [
  { label: "일반대상자", value: "15%" },
  { label: "감경대상자", value: "9%" },
  { label: "감경대상자", value: "6%" },
  { label: "기초수급자", value: "0%" },
];

const gradeCards = [
  {
    grade: "장기요양 1등급",
    score: "95점 이상",
    description: "전적으로 다른 사람의 도움이 필요한 상태",
    note: "인지기능과 신체기능이 크게 저하되어 대부분의 일상생활 지원이 필요한 경우",
  },
  {
    grade: "장기요양 2등급",
    score: "75점 ~ 94점",
    description: "상당 부분 다른 사람의 도움이 필요한 상태",
    note: "일상 전반에서 지속적인 관찰과 지원이 필요한 경우",
  },
  {
    grade: "장기요양 3등급",
    score: "60점 ~ 74점",
    description: "부분적으로 다른 사람의 도움이 필요한 상태",
    note: "상황에 따라 반복적인 생활 지원이 필요한 경우",
  },
  {
    grade: "장기요양 4등급",
    score: "51점 ~ 59점",
    description: "일정 부분 다른 사람의 도움이 필요한 상태",
    note: "보행과 일상 수행에서 간헐적인 도움이 필요한 경우",
  },
  {
    grade: "장기요양 5등급",
    score: "45점 이상 51점 미만",
    description: "치매환자로 판정된 경우",
    note: "주로 치매 진단을 받고 인지지원이 필요한 분",
  },
  {
    grade: "인지지원등급",
    score: "45점 미만",
    description: "치매환자로서 인지지원이 필요한 상태",
    note: "인지기능 저하가 있으나 신체기능은 비교적 유지되는 경우",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "장기요양인정 신청 및 접수",
    description: "국민건강보험공단을 통해 장기요양인정을 신청합니다.",
  },
  {
    step: "STEP 2",
    title: "공단 방문조사",
    description: "어르신의 건강상태와 생활 수행 정도를 방문 조사로 확인합니다.",
  },
  {
    step: "STEP 3",
    title: "의사 소견서 제출",
    description: "방문조사 이후 필요한 경우 의사 소견서를 제출합니다.",
  },
  {
    step: "STEP 4",
    title: "등급판정 및 결과 통보",
    description: "장기요양등급 판정 결과를 안내받고 서비스 범위를 확인합니다.",
  },
  {
    step: "STEP 5",
    title: "급여 이용 시작",
    description: "장기요양기관과 상담 후 계약을 진행하고 서비스를 시작합니다.",
  },
];

export default function LongTermCarePage() {
  return (
    <main className="care-guide-page">
      <Seo page="careGuide" />
      <section className="section page-shell care-guide-shell">
        <section className="cgl-hero reveal-up">
          <div className="cgl-hero-top">
            <div className="cgl-hero-left">
              <span className="cgl-pill">장기요양안내</span>
              <h1 className="cgl-title">노인장기요양보험이란?</h1>
              <p className="cgl-lead">
                고령이나 노인성 질환으로 일상생활 수행이 어려운 어르신께 필요한 돌봄을
                안정적으로 지원하는 사회보장보험입니다.
              </p>
              <p className="cgl-body">
                65세 이상 또는 노인성 질환으로 인해 혼자서 생활하기 어려운 경우, 신체활동과
                가사 지원은 물론 정서 돌봄과 방문목욕까지 장기요양 급여를 받을 수 있습니다.
              </p>
              <ul className="cgl-list">
                <li>방문요양 · 방문목욕 등 재가서비스 이용 가능</li>
                <li>국민건강보험공단 지원으로 비용 부담 완화</li>
                <li>등급 판정 후 상담과 계약을 거쳐 서비스 시작</li>
              </ul>
            </div>

            <div className="cgl-hero-right">
              <img
                src="/hero-care-photo.png"
                alt="요양보호사와 어르신이 장기요양 안내 자료를 함께 살펴보는 모습"
                className="cgl-image"
              />
              <div className="cgl-overlay">
                <span className="cgl-pill">본인부담금 안내</span>
                <h2>방문요양 · 방문목욕은 공단 지원 대상입니다</h2>
                <p>
                  대상 구분에 따라 본인부담금이 달라지며, 재가서비스는 공단 지원을 받아 보다
                  안정적으로 이용하실 수 있습니다.
                </p>
                <div className="cgl-rates">
                  {copaymentRates.map((item) => (
                    <span key={`${item.label}-${item.value}`}>
                      {item.label} {item.value}
                    </span>
                  ))}
                </div>
                <div className="cgl-track" aria-hidden="true">
                  {copaymentRates.map((item) => (
                    <span key={`track-${item.label}-${item.value}`} className="cgl-dot"></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cgl-curve" aria-hidden="true"></div>

          <div className="cgl-cards">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.label} className={`cgl-card cgl-card-${card.key}`}>
                  <div className="cgl-card-head">
                    <span className="cgl-pill cgl-card-pill">{card.label}</span>
                    <div className="cgl-icon" aria-hidden="true">
                      <Icon size={40} strokeWidth={1.55} />
                    </div>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </section>

      <section className="section care-guide-grade-section">
        <div className="container-medium care-guide-container">
          <div className="section-title-wrap section-title-left reveal-up">
            <p className="pre-title">등급 구분</p>
            <h2 className="section-title care-guide-grade-title">
              장기요양등급을
              <span>한눈에 확인하세요</span>
            </h2>
          </div>
          <div className="page-card-grid reveal-up care-guide-grade-grid">
            {gradeCards.map((grade) => (
              <article key={grade.grade} className="page-card care-guide-grade-card care-guide-lift-card">
                <span className="page-card-label">{grade.score}</span>
                <h3>{grade.grade}</h3>
                <p>{grade.description}</p>
                <small>{grade.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section care-guide-steps-section">
        <div className="container-medium care-guide-container">
          <div className="section-title-wrap section-title-left reveal-up">
            <p className="pre-title">신청 및 심사</p>
            <h2 className="section-title care-guide-steps-title">
              장기요양등급 신청 및 심사
              <span><br />STEP 1 ~ STEP 5</span>
            </h2>
          </div>
          <div className="care-guide-steps-grid reveal-up">
            {steps.map((item) => (
              <article key={item.step} className="page-card care-guide-step-card care-guide-lift-card">
                <span className="page-card-label">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
