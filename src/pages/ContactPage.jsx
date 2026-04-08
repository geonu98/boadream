import KakaoConsultButton from "../components/common/KakaoConsultButton";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";

const NAVER_BLOG_URL = "https://blog.naver.com/boacare9988";
const NAVER_MAP_URL = "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%9D%80%ED%8F%89%EA%B5%AC%20%ED%86%B5%EC%9D%BC%EB%A1%9C%20780%20%EC%83%81%EA%B0%80%EB%8F%99%203%EC%B8%B5%204%ED%98%B8";

export default function ContactPage() {
  return (
    <main>
      <section className="section page-shell contact-page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(상담 신청)"
            title="전화 한 통으로 시작하는"
            highlight="따뜻한 돌봄 상담"
          />
          <div className="contact-grid reveal-up">
            <div className="contact-panel">
              <h3>상담 내용을 남겨주시면 확인해드려요</h3>
              <p className="contact-panel-lead">
                보호자 연락처와 희망 서비스를 남겨주시면 어르신 상황에 맞는 상담 방향을 먼저 안내해드립니다.
              </p>
              <ContactForm />
            </div>

            <div className="contact-panel contact-panel-stack contact-quick-panel">
              <a className="button button-solid button-small contact-quick-button" href="tel:023520088">
                전화 연결
              </a>
              <KakaoConsultButton
                variant="outline"
                size="small"
                className="contact-quick-button contact-kakao-action"
              />
              <div className="contact-quick-links">
                <a
                  className="button button-outline button-small contact-quick-link"
                  href={NAVER_BLOG_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  블로그 바로 가기
                </a>
                <a
                  className="button button-outline button-small contact-quick-link"
                  href={NAVER_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  위치 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}