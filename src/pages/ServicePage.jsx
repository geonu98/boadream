import Seo from "../shared/seo/Seo";

const cards = [
  {
    label: "방문요양",
    title: "일상생활 지원이 필요한 어르신께 맞춘 돌봄",
    description:
      "식사 준비, 위생 관리, 이동 보조, 말벗 서비스 등 생활 전반을 안정적으로 지원합니다.",
    note: "가정환경과 건강상태를 고려한 맞춤형 일정 조율",
  },
  {
    label: "방문목욕",
    title: "안전과 위생을 함께 고려한 방문목욕 서비스",
    description:
      "거동이 불편한 어르신도 집에서 편안하게 목욕 서비스를 받을 수 있도록 장비와 인력을 갖춰 방문합니다.",
    note: "보호자와 사전 상담 후 진행",
  },
  {
    label: "상담 절차",
    title: "문의부터 시작까지 차분하게 연결합니다",
    description:
      "전화 상담 후 필요 내용을 확인하고, 등급 여부와 희망 서비스를 기준으로 적합한 이용 방향을 안내드립니다.",
    note: "대표번호 02-352-0088",
  },
];

const bathGuideCards = [
  {
    label: "방문목욕 서비스",
    title: "거동이 불편한 어르신도 편안하게 이용할 수 있도록",
    description:
      "신체 상태와 이동 가능 여부를 고려해 안전한 방식으로 방문목욕 서비스를 제공합니다.",
    note: "사전 상담 후 일정 조율",
  },
  {
    label: "진행 방식",
    title: "위생과 안전을 중심에 둔 서비스 운영",
    description:
      "목욕 전후 어르신 컨디션을 확인하고, 무리가 가지 않도록 단계별로 진행합니다.",
    note: "상황에 따라 보호자 동행 상담 가능",
  },
  {
    label: "이용 문의",
    title: "방문요양과 함께 상담하실 수 있습니다",
    description:
      "목욕 서비스만 별도로 문의하셔도 되고, 방문요양과 함께 이용 가능 여부를 함께 상담받으실 수 있습니다.",
    note: "대표번호 02-352-0088",
  },
];

const serviceSteps = [
  {
    step: "STEP 1",
    title: "장기요양인정서 신청 및 수령",
    description: "국민건강보험공단으로부터 장기요양인정서 수령",
  },
  {
    step: "STEP 2",
    title: "상담 및 신청 문의",
    description: "대상자 본인 또는 가족이 방문요양센터에 서비스 신청",
  },
  {
    step: "STEP 3",
    title: "방문요양서비스 사전조사",
    description: "센터의 사회복지사가 가정을 방문하여 서비스 이용 대상자의 심신 상태를 체크",
  },
  {
    step: "STEP 4",
    title: "서비스 제공 및 서비스 제공계약서 작성",
    description: "원하는 서비스 내용과 시간, 일정 등을 상의하여 계약서 작성",
  },
  {
    step: "STEP 5",
    title: "방문요양서비스의 제공",
    description: "요양보호사가 어르신 가정을 방문하여 신체 및 가사, 일상생활 지원 등의 서비스를 제공",
  },
  {
    step: "STEP 6",
    title: "서비스 모니터링",
    description: "제공되는 서비스를 모니터링하며 최적의 서비스를 제공할 수 있도록 노력",
  },
];

const verificationSteps = [
  { step: "STEP 1", title: "신원인증" },
  { step: "STEP 2", title: "성격유형검사" },
  { step: "STEP 3", title: "면접" },
  { step: "STEP 4", title: "케어교육" },
  { step: "STEP 5", title: "피드백 관리" },
];

export default function ServicePage() {
  return (
    <main className="service-page service-page-expanded service-page-care">
      <Seo page="service" />
      <section className="section page-shell service-page-shell service-page-care-shell">
        <div className="container service-page-container">
          <div className="service-page-heading reveal-up">
            <p className="pre-title">(서비스안내)</p>
            <h1 className="service-page-title">
              집에서 이어지는
              <span><em className="service-page-title-brand">보아드림</em> 돌봄 서비스</span>
            </h1>
            <p className="service-page-lead">
              방문요양과 방문목욕을 중심으로, 어르신께는 더 편안한 하루를,
              보호자께는 더 안심되는 상담과 안내를 제공합니다.
            </p>
          </div>

          <div className="service-dashboard-grid service-care-dashboard-grid reveal-up">
            <article className="service-metric-card service-care-card service-care-card-support">
              <span className="service-care-card-number">01</span>
              <h3>1:1 맞춤 케어</h3>
              <p>
                기본 세면과 위생 관리, 식사 준비, 쾌적한 가사 지원까지
                어르신의 일상 흐름에 맞춰 세심하게 돕습니다.
              </p>
              <ul className="service-care-list">
                <li>기본 세면 · 위생 관리</li>
                <li>식사 준비 및 가사 지원</li>
                <li>생활 리듬을 살리는 맞춤형 방문</li>
              </ul>
              <div className="service-care-icon-grid" aria-hidden="true">
                <div className="service-care-icon-card">
                  <div className="service-care-icon service-care-icon-hygiene">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 9C19 16 15 20.5 15 27C15 32.5 19 37 24 37C29 37 33 32.5 33 27C33 20.5 29 16 24 9Z" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M34.5 12.5V19.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M31 16H38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>위생 관리</span>
                </div>
                <div className="service-care-icon-card">
                  <div className="service-care-icon service-care-icon-meal">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 27C12.5 33 17.5 36 24 36C30.5 36 35.5 33 37 27H11Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"/>
                      <path d="M17 18V25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M21 18V25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M31 16V25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M31 16C34 16 35 18.5 35 21V25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>식사 준비</span>
                </div>
                <div className="service-care-icon-card">
                  <div className="service-care-icon service-care-icon-daily">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 21L24 14L33 21V34H15V21Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"/>
                      <path d="M21 34V27H27V34" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
                      <path d="M36 16L39 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                      <path d="M39 16L36 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>생활 지원</span>
                </div>
              </div>
            </article>

            <article className="service-metric-card service-care-card service-care-card-emotion">
              <span className="service-care-card-number">02</span>
              <div className="service-care-symbol" aria-hidden="true">
                <img src="/boadream-mark.png" alt="" />
              </div>
              <h3>심리 및 정서 지지</h3>
              <p>
                따뜻한 말벗과 감정 나누기, 보호자님과의 긴밀한 소통까지
                마음이 편안해지는 돌봄을 중요하게 생각합니다.
              </p>
              <div className="service-care-chip-group">
                <span>말벗 서비스</span>
                <span>가사 지원</span>
                <span>보호자 상담</span>
                <span>정서적 안정</span>
              </div>
            </article>

            <article className="service-metric-card service-care-card service-care-card-heart">
              <span className="service-care-card-number">03</span>
              <div className="service-care-heart-copy">
                <p className="service-care-heart-kicker">보아드림의 진심</p>
                <strong>마음까지 돌보는 따뜻한 돌봄</strong>
                <span>
                  어르신 한 분 한 분을 존중하며,
                  집처럼 편안한 하루가 이어질 수 있도록 함께합니다.
                </span>
              </div>
              <a href="/contact" className="button button-solid button-small service-care-heart-button">
                상담 문의하기
              </a>
            </article>

            <article className="service-metric-card service-care-card service-care-card-system">
              <span className="service-care-card-number">04</span>
              <div className="service-care-checklist-badge" aria-hidden="true">
                <div className="service-care-checklist-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="12" width="36" height="40" rx="10" stroke="currentColor" strokeWidth="2.6"/>
                    <path d="M25 16.5C25 13.5 27.2 11 30.5 11H33.5C36.8 11 39 13.5 39 16.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
                    <path d="M22 27L25.5 30.5L31.5 24.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 27H42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                    <path d="M22 37L25.5 40.5L31.5 34.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 37H42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>체계적인 관리</span>
              </div>
              <h3>빠른 상담 &amp; 이용</h3>
              <p>
                전문 요양보호사의 책임 케어를 바탕으로 복약, 식단, 방문 일정까지
                체계적으로 안내하고 연결합니다.
              </p>
              <div className="service-care-checks">
                <span>복약 관리</span>
                <span>식단 확인</span>
                <span>이용절차</span>
                <span>장기요양등급</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section service-bath-guide-section">
        <div className="container service-page-container">
          <div className="section-title-wrap section-title-left reveal-up service-process-heading">
            <p className="pre-title">방문목욕 안내</p>
            <h2 className="section-title service-process-title">
              방문요양과 함께
              <span>방문목욕도 상담하실 수 있습니다</span>
            </h2>
          </div>
          <p className="page-copy reveal-up service-bath-guide-copy">
            거동이 불편한 어르신도 안전하고 편안하게 이용하실 수 있도록, 목욕 전후 상태를 함께 확인하며 진행합니다.
          </p>
          <div className="page-card-grid reveal-up service-bath-guide-grid">
            {bathGuideCards.map((card) => (
              <article key={card.title} className="page-card service-bath-guide-card">
                <span className="page-card-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <small>{card.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process-section">
        <div className="container service-page-container">
          <div className="section-title-wrap section-title-left reveal-up service-process-heading">
            <p className="pre-title">서비스 이용</p>
            <h2 className="section-title service-process-title">
              서비스 이용절차
              <span>한눈에 알아보기</span>
            </h2>
          </div>
          <div className="service-process-grid reveal-up">
            {serviceSteps.map((item) => (
              <article key={item.step} className="page-card service-process-card">
                <span className="page-card-label">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-verification-section">
        <div className="container service-page-container">
          <div className="section-title-wrap section-title-left reveal-up service-process-heading">
            <h2 className="section-title">요양보호사 검증절차</h2>
          </div>
          <p className="page-copy reveal-up service-verification-copy">
            확실한 요양보호사 검증절차를 통해
            어르신께서 마음에 드실 수 있게 노력합니다.
          </p>
          <div className="service-verification-grid reveal-up">
            {verificationSteps.map((item) => (
              <article key={item.step} className="page-card service-verification-card">
                <span className="page-card-label">{item.step}</span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
