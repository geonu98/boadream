import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { noticeService } from "../../features/notices/api/noticeService";
import { formatNoticeDate } from "../../features/notices/lib/noticeUtils";

export default function NoticePreviewSection() {
  const noticesQuery = useQuery({
    queryKey: ["public-notices"],
    queryFn: noticeService.listPublishedNotices,
  });

  const previewItems = (noticesQuery.data || []).slice(0, 3);

  return (
    <section className="section page-shell home-notice-section" id="notice-preview">
      <div className="container-medium">
        <div className="section-title-wrap reveal-up home-notice-heading">
          <h2 className="section-title">
            공지사항
            <span>센터 소식과 최신 안내를 먼저 확인해보세요</span>
          </h2>
          <p className="page-lead home-notice-lead">
            서비스 운영 안내, 휴무 공지, 이용 관련 변경 사항을 빠르게 전달드립니다.
          </p>
        </div>

        {noticesQuery.isLoading ? <p className="notice-page-status">공지사항을 불러오는 중입니다.</p> : null}
        {noticesQuery.isError ? (
          <p className="notice-page-status is-error">
            {noticesQuery.error instanceof Error ? noticesQuery.error.message : "공지사항을 불러오지 못했습니다."}
          </p>
        ) : null}

        {!noticesQuery.isLoading && !noticesQuery.isError ? (
          <div className="home-notice-grid reveal-up">
            {previewItems.length ? (
              previewItems.map((notice) => (
                <Link key={notice.id} className="home-notice-card" to={`/notice/${notice.slug}`}>
                  <div className="home-notice-meta">
                    <span className="home-notice-category">{notice.category}</span>
                    <time>{formatNoticeDate(notice.published_at || notice.created_at)}</time>
                  </div>
                  <h3>{notice.title}</h3>
                  <p>{notice.summary}</p>
                </Link>
              ))
            ) : (
              <p className="notice-empty-state">등록된 공지사항이 없습니다.</p>
            )}
          </div>
        ) : null}

        <div className="home-notice-actions reveal-up">
          <Button href="/notice" variant="solid" size="small">
            공지사항 전체보기
          </Button>
          <Button href="/contact" variant="outline" size="small">
            상담 신청하기
          </Button>
        </div>
      </div>
    </section>
  );
}
