import SectionTitle from "../components/common/SectionTitle";
import KakaoDirectionsMap from "../components/directions/KakaoDirectionsMap";
import Seo from "../shared/seo/Seo";

const CENTER_ADDRESS = "서울특별시 은평구 통일로 780 상가동 3층 4호";
const WALK_GUIDE = "불광역 8번출구 기준 도보 3분";
const PHONE_NUMBER = "02-352-0088";
const NAVER_MAP_URL = "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%ED%86%B5%EC%9D%BC%EB%A1%9C%20780%20%EC%83%81%EA%B0%80%EB%8F%99%203%EC%B8%B5%204%ED%98%B8";

export default function DirectionsPage() {
  return (
    <main>
      <Seo page="directions" />
      <section className="section page-shell directions-page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(오시는 길)"
            title="보아드림노인복지센터"
            highlight="오시는 길"
          />
          <p className="page-lead reveal-up directions-page-lead">
            지도와 기본 안내만 간단하게 확인하실 수 있도록 정리했습니다.
          </p>

          <div className="directions-layout reveal-up">
            <article className="directions-map-card">
              <KakaoDirectionsMap />
            </article>

            <aside className="directions-info-card">
              <span className="page-card-label">센터 위치 안내</span>
              <h3>보아드림노인복지센터</h3>
              <dl className="directions-info-list">
                <div>
                  <dt>주소</dt>
                  <dd>{CENTER_ADDRESS}</dd>
                </div>
                <div>
                  <dt>도보</dt>
                  <dd>{WALK_GUIDE}</dd>
                </div>
                <div>
                  <dt>대표번호</dt>
                  <dd>{PHONE_NUMBER}</dd>
                </div>
              </dl>
              <div className="directions-info-actions">
                <a className="button button-solid button-small" href="tel:023520088">
                  전화 연결
                </a>
                <a
                  className="button button-outline button-small"
                  href={NAVER_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  네이버지도에서 보기
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
