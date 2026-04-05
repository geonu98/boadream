import FaqItem from "./FaqItem";

export default function FaqList({ items = [] }) {
  if (!items.length) {
    return <p className="notice-empty-state">등록된 FAQ가 없습니다.</p>;
  }

  return (
    <div className="faq-list reveal-up">
      {items.map((item, index) => (
        <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
