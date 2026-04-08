export default function SectionTitle({ eyebrow: _eyebrow, title, highlight, align = "center", className = "" }) {
  const wrapperClassName = `${
    align === "left"
      ? "section-title-wrap section-title-left"
      : "section-title-wrap"
  } ${className}`.trim();

  return (
    <div className={wrapperClassName}>
      <h2 className="section-title">
        {title} {highlight ? <span>{highlight}</span> : null}
      </h2>
    </div>
  );
}

