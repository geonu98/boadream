import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../../../components/common/Button";
import { faqService } from "../api/faqService";

export default function AdminFaqListPage() {
  const queryClient = useQueryClient();
  const faqsQuery = useQuery({
    queryKey: ["admin-faqs"],
    queryFn: faqService.listAdminFaqs,
  });

  const deleteFaqMutation = useMutation({
    mutationFn: faqService.deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-faqs"] });
      queryClient.invalidateQueries({ queryKey: ["public-faqs"] });
    },
  });

  const handleDelete = (id) => {
    if (!window.confirm("이 FAQ를 삭제하시겠습니까?")) {
      return;
    }

    deleteFaqMutation.mutate(id);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">FAQs</p>
          <h2>FAQ 관리</h2>
          <p className="admin-page-description">자주 묻는 질문과 답변, 노출 순서를 관리할 수 있습니다.</p>
        </div>
        <div className="admin-page-header-actions">
          <Button href="/admin/faqs/new" variant="solid" size="small">
            FAQ 등록
          </Button>
        </div>
      </div>

      {faqsQuery.isLoading ? <p className="admin-page-status">FAQ를 불러오는 중입니다.</p> : null}
      {faqsQuery.isError ? (
        <p className="admin-page-status is-error">
          {faqsQuery.error instanceof Error ? faqsQuery.error.message : "FAQ를 불러오지 못했습니다."}
        </p>
      ) : null}

      {!faqsQuery.isLoading && !faqsQuery.isError ? (
        <div className="admin-faq-list">
          {faqsQuery.data?.length ? (
            faqsQuery.data.map((faq) => (
              <article key={faq.id} className="admin-faq-card">
                <div className="admin-faq-head">
                  <div>
                    <div className="admin-faq-badges">
                      <span className="admin-faq-order">순서 {faq.display_order}</span>
                      <span className={`admin-faq-visibility${faq.is_published ? " is-published" : " is-draft"}`}>
                        {faq.is_published ? "공개" : "비공개"}
                      </span>
                    </div>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                </div>

                <div className="admin-faq-actions">
                  <Button href="/faq" variant="outline" size="small" target="_blank" rel="noreferrer">
                    공개 보기
                  </Button>
                  <Button href={`/admin/faqs/${faq.id}/edit`} variant="solid" size="small">
                    수정
                  </Button>
                  <button
                    type="button"
                    className="button button-outline button-small admin-delete-button"
                    onClick={() => handleDelete(faq.id)}
                    disabled={deleteFaqMutation.isPending}
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="admin-page-status">등록된 FAQ가 없습니다.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
