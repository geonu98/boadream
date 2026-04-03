export default function MarkupSection({ html }) {
  return <div className="markup-fragment" dangerouslySetInnerHTML={{ __html: html }} />;
}
