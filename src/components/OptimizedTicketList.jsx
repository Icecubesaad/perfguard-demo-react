import { useCallback, useMemo } from "react";

const rowStyle = { display: "flex", gap: 8 };

function TicketRow({ ticket, onOpen }) {
  const open = useCallback(() => onOpen(ticket.id), [onOpen, ticket.id]);
  return (
    <li style={rowStyle}>
      <button onClick={open}>{ticket.subject}</button>
    </li>
  );
}

export function OptimizedTicketList({ tickets, onOpen }) {
  const meta = useMemo(() => ({ total: tickets.length }), [tickets.length]);
  return (
    <div data-summary={meta.total}>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <TicketRow ticket={ticket} onOpen={onOpen} />
          </li>
        ))}
      </ul>
    </div>
  );
}
