import { useEffect, useState } from "react";

export function BillingRows({ rows, onPick }) {
  return (
    <table>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} onClick={() => onPick(row.id)}>
            <td>{row.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function BillingTotal({ totals }) {
  return <SummaryCard data={{ totals }} style={{ marginTop: 8 }} />;
}

export function BillingHeader() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000);
  }, []);
  return <header>{now.toISOString()}</header>;
}
