export default function Footer() {
  return (
    <footer className="site-footer site-footer-care" id="footer">
      <div className="container footer-care-grid footer-care-grid-location">
        <div className="footer-care-intro reveal-up">
          <div className="brand-mark brand-mark-footer">
            <span className="brand-flower" aria-hidden="true">
              <img className="brand-mark-image" src="/boadream-mark.png" alt="" />
            </span>
            <span className="brand-copy">보아드림노인복지센터</span>
          </div>

          <h2>
            가족의 마음으로,
            <br />
            어르신의 내일을 함께합니다.
          </h2>
          <p>
            보아드림노인복지센터는 한결같은 따뜻함으로 기억되고 싶습니다.
          </p>

          <div className="footer-care-actions">
            <a className="button button-solid button-small footer-phone-button" href="tel:023520088">
              전화 상담: 02-352-0088
            </a>
            <a className="button button-outline button-small footer-kakao-button" href="/contact">
              상담 신청 바로가기
            </a>
            <a
              className="button button-outline button-small footer-blog-button"
              href="https://blog.naver.com/boacare9988"
              target="_blank"
              rel="noreferrer"
            >
              네이버 블로그 바로가기
            </a>
          </div>
        </div>

        <aside className="footer-location-card reveal-up">
          <span className="footer-location-label">오시는 길</span>
          <h3>서울특별시 은평구 통일로 780<br />상가동 3층 4호</h3>
          <p>
            불광역 8번출구 기준 도보 약 3분 거리입니다.<br />
            미성아파트 상가동에서 보아드림노인복지센터를 찾으실 수 있습니다.
          </p>
          <a
            className="button button-outline button-small footer-map-button"
            href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%ED%86%B5%EC%9D%BC%EB%A1%9C%20780%20%EC%83%81%EA%B0%80%EB%8F%99%203%EC%B8%B5%204%ED%98%B8"
            target="_blank"
            rel="noreferrer"
          >
            네이버지도 열기
          </a>
        </aside>
      </div>

      <div className="container footer-legal">
        <p>사업자등록번호: 000-00-00000 | 대표: OOO</p>
        <p>주소: 서울특별시 은평구 통일로 780 상가동3층4호 | TEL: 02-352-0088</p>
        <p>© 2026 보아드림노인복지센터. All rights reserved.</p>
      </div>
    </footer>
  );
}
