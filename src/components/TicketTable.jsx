export function TicketTable({ items }) {
  return <ul>{items.map((item, index) => <li key={index}>{item.name}</li>)}</ul>;
}
