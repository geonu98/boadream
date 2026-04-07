import { useQueries } from "@tanstack/react-query";
import Button from "../../../components/common/Button";
import { faqService } from "../../faqs/api/faqService";
import { inquiryService } from "../../inquiries/api/inquiryService";
import { noticeService } from "../../notices/api/noticeService";
import { reviewService } from "../../reviews/api/reviewService";

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminDashboardPage() {
  const [inquiriesQuery, noticesQuery, faqsQuery, reviewsQuery] = useQueries({
    queries: [
      { queryKey: ["admin-inquiries"], queryFn: inquiryService.listInquiries },
      { queryKey: ["admin-notices"], queryFn: noticeService.listAdminNotices },
      { queryKey: ["admin-faqs"], queryFn: faqService.listAdminFaqs },
      { queryKey: ["admin-reviews"], queryFn: reviewService.listAdminReviews },
    ],
  });

  const isLoading =
    inquiriesQuery.isLoading || noticesQuery.isLoading || faqsQuery.isLoading || reviewsQuery.isLoading;
  const isError = inquiriesQuery.isError || noticesQuery.isError || faqsQuery.isError || reviewsQuery.isError;

  const inquiries = inquiriesQuery.data || [];
  const notices = noticesQuery.data || [];
  const faqs = faqsQuery.data || [];
  const reviews = reviewsQuery.data || [];

  const summaryCards = [
    {
      label: "접수 문의",
      value: inquiries.filter((item) => item.status === "received").length,
      note: `전체 ${inquiries.length}건`,
      tone: "danger",
    },
    {
      label: "공지사항",
      value: notices.length,
      note: `공개 ${notices.filter((item) => item.is_published).length}건`,
      tone: "neutral",
    },
    {
      label: "FAQ",
      value: faqs.length,
      note: `홈 상위노출 ${faqs.filter((item) => item.show_on_home).length}건`,
      tone: "neutral",
    },
    {
      label: "후기",
      value: reviews.length,
      note: `홈 상위노출 ${reviews.filter((item) => item.show_on_home).length}건`,
      tone: "success",
    },
  ];

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="admin-page admin-dashboard-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Dashboard</p>
          <h2>운영 현황</h2>
          <p className="admin-page-description">
            상담 문의와 주요 콘텐츠 현황을 한 번에 확인하고 바로 관리 페이지로 이동할 수 있습니다.
          </p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/inquiries" variant="solid" size="small">
            문의 확인
          </Button>
          <Button href="/admin/notices" variant="outline" size="small">
            콘텐츠 관리
          </Button>
        </div>
      </div>

      {isLoading ? <p className="admin-page-status">대시보드를 불러오는 중입니다.</p> : null}
      {isError ? <p className="admin-page-status is-error">대시보드 데이터를 불러오지 못했습니다.</p> : null}

      {!isLoading && !isError ? (
        <>
          <section className="admin-dashboard-grid">
            {summaryCards.map((card) => (
              <article key={card.label} className={`admin-summary-card is-${card.tone}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <p>{card.note}</p>
              </article>
            ))}
          </section>

          <section className="admin-dashboard-panels">
            <article className="admin-dashboard-panel">
              <div className="admin-dashboard-panel-head">
                <div>
                  <p className="admin-page-eyebrow">Recent Inquiries</p>
                  <h3>최근 문의</h3>
                </div>
                <Button href="/admin/inquiries" variant="outline" size="small">
                  전체 보기
                </Button>
              </div>

              {recentInquiries.length ? (
                <div className="admin-dashboard-inquiry-list">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="admin-dashboard-inquiry-item">
                      <div>
                        <strong>{inquiry.name}</strong>
                        <p>{inquiry.service_type} / {inquiry.phone}</p>
                      </div>
                      <div className="admin-dashboard-inquiry-meta">
                        <span className={`admin-inquiry-badge ${inquiry.status === "completed" ? "is-completed" : "is-received"}`}>
                          {inquiry.status === "completed" ? "상담완료" : "접수"}
                        </span>
                        <time>{formatDate(inquiry.created_at)}</time>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="admin-page-status">최근 문의가 없습니다.</p>
              )}
            </article>

            <article className="admin-dashboard-panel">
              <div className="admin-dashboard-panel-head">
                <div>
                  <p className="admin-page-eyebrow">Quick Links</p>
                  <h3>바로가기</h3>
                </div>
              </div>

              <div className="admin-quick-link-grid">
                <Button href="/admin/notices/new" variant="solid" size="small">
                  공지 등록
                </Button>
                <Button href="/admin/faqs/new" variant="outline" size="small">
                  FAQ 등록
                </Button>
                <Button href="/admin/reviews/new" variant="outline" size="small">
                  후기 등록
                </Button>
                <Button href="/contact" variant="outline" size="small" target="_blank" rel="noreferrer">
                  사용자 문의 폼 보기
                </Button>
              </div>
            </article>
          </section>
        </>
      ) : null}
    </div>
  );
}
