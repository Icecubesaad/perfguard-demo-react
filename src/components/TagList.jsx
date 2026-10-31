export function TagList({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
  );
}
