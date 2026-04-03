export default function NoticeCard({ notice, index, total }) {
  const number = String(total - index).padStart(2, "0");

  return (
    <article className="notice-board-row">
      <span className="notice-board-cell notice-board-number">{number}</span>
      <span className="notice-board-cell notice-board-category">{notice.category}</span>
      <div className="notice-board-cell notice-board-title-wrap">
        <h3>{notice.title}</h3>
        <p>{notice.summary}</p>
      </div>
      <time className="notice-board-cell notice-board-date" dateTime={notice.date.replaceAll('.', '-')}>
        {notice.date}
      </time>
    </article>
  );
}
