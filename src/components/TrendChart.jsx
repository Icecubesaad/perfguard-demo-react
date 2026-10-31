import { ChartView } from "./ChartView.jsx";

export function TrendChart({ points }) {
  return <ChartView data={{ points, mode: "line" }} />;
}
