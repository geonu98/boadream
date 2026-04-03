import FaqItem from "./FaqItem";

export default function FaqList({ items }) {
  return (
    <div className="faq-list reveal-up">
      {items.map((item, index) => (
        <FaqItem key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
