import SectionTitle from "../components/common/SectionTitle";

const supportCards = [
  {
    label: "대상",
    title: "장기요양인정 및 등급판정을 받은 어르신",
    description:
      "고령이나 노인성 질환으로 혼자서 일상생활을 수행하기 어려운 어르신 중 국민건강보험공단으로부터 장기요양인정 및 등급판정을 받은 분이 대상입니다.",
  },
  {
    label: "지원내용",
    title: "신체 · 가사 · 정서 · 활동 · 인지 지원",
    description:
      "신체활동 또는 목욕, 식사 및 일상생활의 도움, 말벗이나 격려 등의 정서적인 지원, 병원동행이나 산책 등의 활동 지원, 인지활동 지원을 제공합니다.",
  },
  {
    label: "목적",
    title: "건강증진과 생활 안정, 가족 부담 경감",
    description:
      "어르신 노후의 건강증진 및 생활의 안정, 가족 부담의 경감, 가족 구성원의 삶의 질 향상을 돕는 데 목적이 있습니다.",
  },
];

const gradeCards = [
  {
    grade: "장기요양 1등급",
    score: "95점 이상",
    description: "전적으로 다른 사람의 도움이 필요한 자",
    note: "인지기능과 신체기능이 많이 떨어져 대부분 침상생활",
  },
  {
    grade: "장기요양 2등급",
    score: "75점 ~ 94점",
    description: "상당 부분 다른 사람의 도움이 필요한 자",
    note: "일상 전반에서 지속적인 도움이 필요한 경우",
  },
  {
    grade: "장기요양 3등급",
    score: "60점 ~ 74점",
    description: "부분적으로 다른 사람의 도움이 필요한 자",
    note: "상황에 따라 반복적인 생활 지원이 필요한 경우",
  },
  {
    grade: "장기요양 4등급",
    score: "51점 ~ 59점",
    description: "일정 부분 다른 사람의 도움이 필요한 자",
    note: "보행기, 지팡이 등을 잡고 단거리는 이동 가능",
  },
  {
    grade: "장기요양 5등급",
    score: "45점 이상 51점 미만",
    description: "치매환자로 판정된 자",
    note: "오로지 치매 진단만 받으신 분",
  },
  {
    grade: "인지지원등급",
    score: "45점 미만",
    description: "치매환자로서 인지지원이 필요한 자",
    note: "인지활동 중심 지원 대상",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "장기요양인정서 신청 및 수령",
    description: "국민건강보험공단으로부터 장기요양인정서 수령",
  },
  {
    step: "STEP 2",
    title: "공단방문조사",
    description: "어르신 건강상태 확인, 직원방문 · 보호자님 동석",
  },
  {
    step: "STEP 3",
    title: "의사 소견서 제출",
    description: "일반적으로 공단 방문일 기준 일주일 이내에 제출",
  },
  {
    step: "STEP 4",
    title: "등급심사 및 결과 통보",
    description: "문자 및 우편 안내, 우편 수령 전 전화 문의로 등급 확인 가능, 신청서 제출일로부터 30일 이내 판정",
  },
  {
    step: "STEP 5",
    title: "급여이용",
    description: "장기요양인정서에 기재된 내용 범위 내에서 장기요양기관과 계약 체결",
  },
];

export default function LongTermCarePage() {
  return (
    <main className="care-guide-page">
      <section className="section page-shell care-guide-shell">
        <div className="container-medium care-guide-container">
          <SectionTitle
            eyebrow="(장기요양안내)"
            title="노인장기요양보험이란?"
            className="care-guide-intro-title"
            align="left"
          />
          <div className="care-guide-hero reveal-up">
            <div className="care-guide-hero-copy">
              <p className="care-guide-summary">
                고령이나 노인성 질환으로 일상생활 수행이 어려운 어르신에게
                필요한 돌봄을 지원하는 사회보장보험입니다.
              </p>
              <p className="page-copy care-guide-copy-left">
                65세 이상 또는 노인성 질환으로 인해 혼자 일상생활을 수행하기 어려운 경우,
                신체활동과 가사 지원 등 장기요양급여를 받을 수 있습니다.
              </p>
              <p className="page-copy care-guide-copy-left">
                특히 방문요양과 방문목욕 같은 재가복지서비스는 국민건강보험공단 지원 대상이며,
                대상 구분에 따라 본인부담률이 달라집니다.
              </p>
              <ul className="care-guide-point-list">
                <li>방문요양 · 방문목욕 등 재가서비스 이용 가능</li>
                <li>공단 지원으로 비용 부담 완화</li>
                <li>등급 판정 후 상담과 계약을 거쳐 서비스 시작</li>
              </ul>
            </div>
            <div className="care-guide-cost-card">
              <span className="page-card-label">본인부담금 안내</span>
              <h3>방문요양 · 방문목욕은 공단 지원 대상입니다</h3>
              <p>
                방문요양과 방문목욕 등 재가복지서비스는 국민건강보험공단 지원을 받아
                본인부담을 줄여 이용할 수 있습니다.
              </p>
              <div className="care-guide-cost-list">
                <span>일반대상자 15%</span>
                <span>감경대상자 9%</span>
                <span>감경대상자 6%</span>
                <span>기초수급자 0%</span>
              </div>
            </div>
          </div>

          <div className="page-card-grid reveal-up care-guide-support-grid">
            {supportCards.map((card) => (
              <article key={card.label} className="page-card care-guide-support-card care-guide-lift-card">
                <span className="page-card-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
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
            <p className="pre-title">절차 및 심사</p>
            <h2 className="section-title care-guide-steps-title">
              장기요양등급절차 및 심사
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

