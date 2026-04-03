export default function ServiceSection() {
  return (
    <section className="section section-included" id="included">
      <div className="container-medium">
        <div className="section-title-wrap reveal-up">
          <p className="pre-title">보아드림의 핵심 서비스</p>
          <h2 className="section-title service-section-title">
            일상 가까이에서 드리는<br />
            <span className="service-title-line">4대 돌봄지원</span>
          </h2>
        </div>

        <div className="included-grid service-support-layout">
          <article className="included-card included-card-image reveal-left">
            <img src="/care-support-illustration.png" alt="보아드림 돌봄 지원 일러스트" />
            <div className="included-overlay">
              <h3>신체 지원</h3>
              <p>식사, 복약, 세면, 이동 보조 등을 통해 기본 생활을 안전하게 돕습니다.</p>
              <div className="metric-bar service-metric-bar">
                <strong>일상 동행</strong>
                <span>무리 없는 움직임과 익숙한 생활 리듬을 함께 지켜드립니다.</span>
              </div>
            </div>
          </article>

          <article className="included-card included-card-panel included-card-panel-services reveal-right">
            <h3>실제로 어떤 도움을 드리나요?</h3>
            <p className="included-panel-copy">
              보아드림은 신체·가사·정서·인지 지원을 균형 있게 구성해, 어르신이 집에서도 더
              편안한 하루를 보내실 수 있도록 돕습니다.
            </p>
            <div className="service-support-list">
              <article className="service-support-item">
                <strong>신체 지원</strong>
                <span>식사 보조, 복약 확인, 위생 관리, 이동 지원으로 안전한 하루를 돕습니다.</span>
              </article>
              <article className="service-support-item">
                <strong>가사 지원</strong>
                <span>식사 준비와 주변 정리, 청결 관리로 생활의 부담을 덜어드립니다.</span>
              </article>
              <article className="service-support-item">
                <strong>정서 지원</strong>
                <span>말벗, 산책, 일상 대화로 정서적 안정과 따뜻한 교감을 이어갑니다.</span>
              </article>
              <article className="service-support-item">
                <strong>인지 지원</strong>
                <span>회상, 카드 활동, 워크북 활동 등으로 인지 자극과 일상 참여를 돕습니다.</span>
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
