import { StatCard } from "./components/StatCard.jsx";
import { tickets } from "./data/tickets.js";

const openCount = tickets.filter((ticket) => ticket.status === "open").length;

export default function App() {
  return (
    <main className="dashboard">
      <h1>Support dashboard</h1>
      <section className="stats">
        <StatCard label="Open tickets" value={openCount} />
        <StatCard label="Total tickets" value={tickets.length} />
      </section>
    </main>
  );
}
