export function TagList({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  );
}
