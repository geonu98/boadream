import { useQuery } from "@tanstack/react-query";
import NoticeList from "../components/notice/NoticeList";
import { noticeService } from "../features/notices/api/noticeService";
import SectionTitle from "../components/common/SectionTitle";

export default function NoticePage() {
  const noticesQuery = useQuery({
    queryKey: ["public-notices"],
    queryFn: noticeService.listPublishedNotices,
  });

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

          {noticesQuery.isLoading ? <p className="notice-page-status">공지사항을 불러오는 중입니다.</p> : null}
          {noticesQuery.isError ? (
            <p className="notice-page-status is-error">
              {noticesQuery.error instanceof Error
                ? noticesQuery.error.message
                : "공지사항을 불러오지 못했습니다."}
            </p>
          ) : null}
          {!noticesQuery.isLoading && !noticesQuery.isError ? <NoticeList items={noticesQuery.data || []} /> : null}
        </div>
      </section>
    </main>
  );
}
