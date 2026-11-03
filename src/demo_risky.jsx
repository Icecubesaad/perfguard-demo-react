import { Component } from "react";
 
export function TicketList({ tickets, onSelect }) {
  return (
    <ul>
      {tickets.map((ticket, index) => (
        <li key={index} onClick={() => onSelect(ticket.id)}>
          {ticket.title}
        </li>
      ))}
    </ul>
  );
}
 
export function TicketBadge({ open }) {
  return <span style={{ color: open ? "green" : "gray" }}>open</span>;
}
 
export function TicketChart({ points }) {
  return <ChartView data={{ points, mode: "line" }} />;
}
 
export class Counter extends Component {
  bump() {
    this.state.count += 1;
    this.forceUpdate();
  }
}
