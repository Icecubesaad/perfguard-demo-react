export function ChartView({ data }) {
  const points = data.points || [];
  return (
    <svg viewBox="0 0 120 40" role="img" aria-label={`trend with ${points.length} points`}>
      <polyline
        fill="none"
        stroke={data.mode === "line" ? "#2f6fed" : "#8a94a6"}
        points={points.map((point) => point.join(",")).join(" ")}
      />
    </svg>
  );
}
