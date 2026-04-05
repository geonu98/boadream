import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { inquiryService } from "../api/inquiryService";

const statusOptions = [
  { value: "received", label: "접수" },
  { value: "completed", label: "상담완료" },
];

function formatDate(value) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminInquiryListPage() {
  const queryClient = useQueryClient();
  const inquiriesQuery = useQuery({
    queryKey: ["admin-inquiries"],
    queryFn: inquiryService.listInquiries,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status, adminMemo }) => inquiryService.updateInquiryStatus(id, status, adminMemo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-inquiries"] });
    },
  });

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <p className="admin-page-eyebrow">Contact Inquiries</p>
          <h2>상담 문의 관리</h2>
          <p className="admin-page-description">
            접수된 문의를 확인하고, 상담 완료 처리와 관리자 메모를 남길 수 있습니다.
          </p>
        </div>
      </div>

      {inquiriesQuery.isLoading ? <p className="admin-page-status">문의 목록을 불러오는 중입니다.</p> : null}
      {inquiriesQuery.isError ? (
        <p className="admin-page-status is-error">
          {inquiriesQuery.error instanceof Error
            ? inquiriesQuery.error.message
            : "문의 목록을 불러오지 못했습니다."}
        </p>
      ) : null}

      {!inquiriesQuery.isLoading && !inquiriesQuery.isError ? (
        <div className="admin-inquiry-list">
          {inquiriesQuery.data?.length ? (
            inquiriesQuery.data.map((inquiry) => {
              const isUpdating = updateStatusMutation.isPending && updateStatusMutation.variables?.id === inquiry.id;
              const summaryItems = [
                { label: "연락처", value: inquiry.phone },
                { label: "희망 서비스", value: inquiry.service_type },
                { label: "장기요양등급", value: inquiry.care_grade },
                { label: "상담 완료일", value: formatDate(inquiry.consulted_at) },
              ];

              return (
                <article key={inquiry.id} className="admin-inquiry-card">
                  <div className="admin-inquiry-card-head">
                    <div className="admin-inquiry-title-block">
                      <span
                        className={`admin-inquiry-badge ${
                          inquiry.status === "completed" ? "is-completed" : "is-received"
                        }`}
                      >
                        {inquiry.status === "completed" ? "상담완료" : "접수"}
                      </span>
                      <h3>{inquiry.name}</h3>
                    </div>
                    <p className="admin-inquiry-created-at">{formatDate(inquiry.created_at)}</p>
                  </div>

                  <ul className="admin-inquiry-summary" aria-label="문의 기본 정보">
                    {summaryItems.map((item) => (
                      <li key={item.label} className="admin-inquiry-summary-item">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </li>
                    ))}
                  </ul>

                  <div className="admin-inquiry-body">
                    <section className="admin-inquiry-panel admin-inquiry-message-panel">
                      <p className="admin-inquiry-panel-label">문의 내용</p>
                      <div className="admin-inquiry-message-copy">{inquiry.message}</div>
                    </section>

                    <section className="admin-inquiry-panel admin-inquiry-control-panel">
                      <div className="admin-inquiry-actions compact">
                        <label>
                          <span>상태</span>
                          <select
                            className={`admin-status-select ${
                              inquiry.status === "completed" ? "is-completed" : "is-received"
                            }`}
                            value={inquiry.status}
                            onChange={(event) =>
                              updateStatusMutation.mutate({
                                id: inquiry.id,
                                status: event.target.value,
                                adminMemo: inquiry.admin_memo || null,
                              })
                            }
                            disabled={isUpdating}
                          >
                            {statusOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </label>

                        {isUpdating ? <p className="admin-inline-status">저장 중...</p> : null}
                      </div>

                      <label className="admin-inquiry-memo compact">
                        <span>관리자 메모</span>
                        <textarea
                          rows="2"
                          placeholder="상담 결과나 후속 조치 메모를 남겨주세요"
                          defaultValue={inquiry.admin_memo || ""}
                          onBlur={(event) => {
                            const nextMemo = event.target.value.trim();

                            if ((inquiry.admin_memo || "") === nextMemo) {
                              return;
                            }

                            updateStatusMutation.mutate({
                              id: inquiry.id,
                              status: inquiry.status,
                              adminMemo: nextMemo || null,
                            });
                          }}
                        />
                      </label>
                    </section>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="admin-page-status">아직 접수된 문의가 없습니다.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
