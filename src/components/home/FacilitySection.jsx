const reviews = [
  {
    initial: "김",
    name: "김OO 보호자",
    role: "방문요양 이용",
    body: "어머니가 스스로 하실 수 있는 부분은 기다려주시고, 꼭 필요한 순간에만 자연스럽게 도와주셔서 정말 안심이 됐습니다.",
  },
  {
    initial: "박",
    name: "박OO 어르신",
    role: "정서 지원 중심",
    body: "말벗이 되어주고 산책도 함께 해주셔서 하루가 훨씬 부드럽고 덜 외롭게 느껴졌습니다.",
  },
  {
    initial: "이",
    name: "이OO 보호자",
    role: "방문목욕 이용",
    body: "불편해하실까 걱정했는데 설명도 차분하게 해주시고 위생적으로 진행해주셔서 믿음이 갔습니다.",
  },
  {
    initial: "최",
    name: "최OO 가족",
    role: "인지 지원 활동",
    body: "일상과 카드 활동을 같이 해주시면서 웃는 시간이 많아졌고, 예전보다 표정이 훨씬 밝아졌어요.",
  },
  {
    initial: "정",
    name: "정OO 보호자",
    role: "가사 지원 중심",
    body: "식사 준비와 주변 정리를 꼼꼼하게 챙겨주셔서, 보호자인 저도 한숨 돌릴 수 있었습니다.",
  },
];

const visibleReviews = reviews.slice(0, 4);
const marqueeReviews = [...visibleReviews, ...visibleReviews];

export default function FacilitySection() {
  return (
    <section className="section section-split section-review-marquee" id="stories">
      <div className="container">
        <div className="review-marquee-head reveal-up">
          <h2>이용 후기</h2>
          <p>
            보아드림노인복지센터를 이용한 어르신과 보호자분들의 실제 경험을 바탕으로,
            돌봄 과정에서 느낀 변화와 만족을 소개합니다.
          </p>
        </div>

        <div className="review-marquee-window reveal-up">
          <div className="review-marquee-track">
            {marqueeReviews.map((review, index) => (
              <article key={`${review.name}-${index}`} className="review-slide-card" aria-hidden={index >= visibleReviews.length}>
                <div className="review-avatar-shell" aria-hidden="true">
                  <div className="review-avatar-ring">
                    <div className="review-avatar-circle">{review.initial}</div>
                  </div>
                </div>
                <div className="review-slide-copy">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                  <p>{review.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
