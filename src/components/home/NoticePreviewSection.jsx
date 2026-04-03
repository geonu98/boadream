import MarkupSection from "../common/MarkupSection";
import { homeSectionMarkup } from "../../data/siteContent";

export default function NoticePreviewSection() {
  return <MarkupSection html={homeSectionMarkup.noticePreview} />;
}
