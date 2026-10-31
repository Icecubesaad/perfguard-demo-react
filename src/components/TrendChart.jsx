import { useMemo } from "react";
import { ChartView } from "./ChartView.jsx";

export function TrendChart({ points }) {
  const data = useMemo(() => ({ points, mode: "line" }), [points]);
  return <ChartView data={data} />;
}
