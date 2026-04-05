import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../../../components/common/Button";
import { noticeService } from "../api/noticeService";
import { formatNoticeDate } from "../lib/noticeUtils";

export default function AdminNoticeListPage() {
  const queryClient = useQueryClient();
  const noticesQuery = useQuery({
    queryKey: ["admin-notices"],
    queryFn: noticeService.listAdminNotices,
  });

  const deleteNoticeMutation = useMutation({
    mutationFn: noticeService.deleteNotice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-notices"] });
      queryClient.invalidateQueries({ queryKey: ["public-notices"] });
    },
  });

  const handleDelete = (id) => {
    if (!window.confirm("이 공지사항을 삭제하시겠습니까?")) {
      return;
    }

    deleteNoticeMutation.mutate(id);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Notices</p>
          <h2>공지사항 관리</h2>
          <p className="admin-page-description">공개 공지와 비공개 초안을 등록하고 수정할 수 있습니다.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/notices/new" variant="solid" size="small">
            공지 등록
          </Button>
        </div>
      </div>

      {noticesQuery.isLoading ? <p className="admin-page-status">공지사항을 불러오는 중입니다.</p> : null}
      {noticesQuery.isError ? (
        <p className="admin-page-status is-error">
          {noticesQuery.error instanceof Error
            ? noticesQuery.error.message
            : "공지사항을 불러오지 못했습니다."}
        </p>
      ) : null}

      {!noticesQuery.isLoading && !noticesQuery.isError ? (
        <div className="admin-notice-list">
          {noticesQuery.data?.length ? (
            noticesQuery.data.map((notice) => (
              <article key={notice.id} className="admin-notice-card">
                <div className="admin-notice-head">
                  <div>
                    <div className="admin-notice-badges">
                      <span className="admin-notice-category">{notice.category}</span>
                      <span className={`admin-notice-visibility${notice.is_published ? " is-published" : " is-draft"}`}>
                        {notice.is_published ? "공개" : "비공개"}
                      </span>
                    </div>
                    <h3>{notice.title}</h3>
                    <p>{notice.summary}</p>
                  </div>
                  <div className="admin-notice-meta">
                    <span>{formatNoticeDate(notice.published_at || notice.created_at)}</span>
                    <span>/{notice.slug}</span>
                  </div>
                </div>

                <div className="admin-notice-actions">
                  <Button href={`/notice/${notice.slug}`} variant="outline" size="small" target="_blank" rel="noreferrer">
                    공개 보기
                  </Button>
                  <Button href={`/admin/notices/${notice.id}/edit`} variant="solid" size="small">
                    수정
                  </Button>
                  <button
                    type="button"
                    className="button button-outline button-small admin-delete-button"
                    onClick={() => handleDelete(notice.id)}
                    disabled={deleteNoticeMutation.isPending}
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="admin-page-status">등록된 공지사항이 없습니다.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
