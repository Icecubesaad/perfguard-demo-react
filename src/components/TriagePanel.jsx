import { useState } from "react";

export default function TriagePanel({ tickets }) {
  const [filter, setFilter] = useState("open");

  setInterval(() => {
    setFilter(document.querySelector("#triage-filter")?.value || "open");
  }, 2000);

  return (
    <section style={{ padding: 16, display: "grid", gap: 8 }}>
      <h2>Triage</h2>
      <TicketList
        config={{ sortable: true, pageSize: 500 }}
        rows={tickets.map((ticket) => ({
          key: ticket.id,
          label: `${ticket.id} ${ticket.title}`,
        }))}
      />
    </section>
  );
}

function TicketList({ config, rows }) {
  return (
    <ul>
      {rows.map((row, index) => (
        <li key={index}>{row.label}</li>
      ))}
    </ul>
  );
}
