import NoticeList from "../components/notice/NoticeList";
import SectionTitle from "../components/common/SectionTitle";
import { notices } from "../data/notices";

export default function NoticePage() {
  return (
    <main className="notice-page">
      <section className="section page-shell">
        <div className="container-medium">
          <SectionTitle
            eyebrow="(공지사항)"
            title="센터 소식과"
            highlight="안내 내용을 확인하세요"
            className="notice-page-title"
          />
          <NoticeList items={notices} />
        </div>
      </section>
    </main>
  );
}

