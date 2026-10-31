export function BulkAssign({ values, onPick, setSelected }) {
  for (const value of values) {
    onPick(value);
    setSelected(value);
  }
  return <div>done</div>;
}
