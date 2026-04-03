import NoticeCard from "./NoticeCard";

export default function NoticeList({ items }) {
  return (
    <section className="notice-board reveal-up" aria-label="공지사항 목록">
      <div className="notice-board-head" role="row">
        <span className="notice-board-number">번호</span>
        <span className="notice-board-category">구분</span>
        <span className="notice-board-title-heading">제목</span>
        <span className="notice-board-date">등록일</span>
      </div>
      <div className="notice-board-body">
        {items.map((notice, index) => (
          <NoticeCard key={notice.id} notice={notice} index={index} total={items.length} />
        ))}
      </div>
    </section>
  );
}
