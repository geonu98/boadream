import { Link } from "react-router-dom";
import { formatNoticeDate } from "../../features/notices/lib/noticeUtils";

export default function NoticeCard({ notice, index, total }) {
  const number = String(total - index).padStart(2, "0");
  const dateValue = notice.published_at || notice.created_at;
  const dateLabel = formatNoticeDate(dateValue);

  return (
    <article className="notice-board-row">
      <span className="notice-board-cell notice-board-number">{number}</span>
      <span className="notice-board-cell notice-board-category">{notice.category}</span>
      <div className="notice-board-cell notice-board-title-wrap">
        <Link className="notice-board-link" to={`/notice/${notice.slug}`}>
          <h3>{notice.title}</h3>
          <p>{notice.summary}</p>
        </Link>
      </div>
      <time className="notice-board-cell notice-board-date" dateTime={dateValue || undefined}>
        {dateLabel}
      </time>
    </article>
  );
}
