export function PerfGuardLocalSmoke({ records }) {
  return (
    <ul>
      {records.map((record) => (
        <li>{record.name}</li>
      ))}
    </ul>
  );
}
