import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/common/Button";
import { noticeService } from "../api/noticeService";
import { formatNoticeDate } from "../lib/noticeUtils";
import Seo from "../../../shared/seo/Seo";

export default function NoticeDetailPage() {
  const { slug = "" } = useParams();
  const noticeQuery = useQuery({
    queryKey: ["public-notice", slug],
    queryFn: () => noticeService.getNoticeBySlug(slug),
    enabled: Boolean(slug),
  });

  const notice = noticeQuery.data;

  return (
    <main className="notice-detail-page">
      <Seo
        page="notice"
        title={notice ? `${notice.title} | 공지사항 | 보아드림노인복지센터` : undefined}
        description={notice?.summary || undefined}
        ogTitle={notice ? `${notice.title} | 보아드림노인복지센터` : undefined}
        ogDescription={notice?.summary || undefined}
        canonicalPath={slug ? `/notice/${slug}` : "/notice"}
      />
      <section className="section page-shell">
        <div className="container-medium notice-detail-shell">
          <div className="notice-detail-actions">
            <Button href="/notice" variant="outline" size="small">
              목록으로
            </Button>
          </div>

          {noticeQuery.isLoading ? <p className="notice-page-status">공지사항을 불러오는 중입니다.</p> : null}
          {noticeQuery.isError ? (
            <p className="notice-page-status is-error">
              {noticeQuery.error instanceof Error
                ? noticeQuery.error.message
                : "공지사항을 불러오지 못했습니다."}
            </p>
          ) : null}

          {!noticeQuery.isLoading && !noticeQuery.isError && notice ? (
            <article className="notice-detail-card">
              <div className="notice-detail-head">
                <span className="notice-detail-category">{notice.category}</span>
                <time className="notice-detail-date" dateTime={notice.published_at || notice.created_at || undefined}>
                  {formatNoticeDate(notice.published_at || notice.created_at)}
                </time>
              </div>
              <h1>{notice.title}</h1>
              <p className="notice-detail-summary">{notice.summary}</p>
              <div className="notice-detail-content">{notice.content}</div>
            </article>
          ) : null}

          {!noticeQuery.isLoading && !noticeQuery.isError && !notice ? (
            <div className="notice-detail-card">
              <h1>공지사항을 찾을 수 없습니다.</h1>
              <p className="notice-detail-summary">삭제되었거나 비공개 처리된 공지일 수 있습니다.</p>
              <Link className="notice-inline-link" to="/notice">
                공지사항 목록으로 돌아가기
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
