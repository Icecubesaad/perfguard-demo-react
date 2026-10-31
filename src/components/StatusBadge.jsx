export function StatusBadge({ active }) {
  return <span style={{ color: active ? "green" : "gray" }}>ok</span>;
}
