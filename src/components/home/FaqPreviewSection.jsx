import MarkupSection from "../common/MarkupSection";
import { homeSectionMarkup } from "../../data/siteContent";

export default function FaqPreviewSection() {
  return <MarkupSection html={homeSectionMarkup.faqPreview} />;
}
