export function BulkAssign({ values, onPick, setSelected }) {
  for (const value of values) {
    onPick(value);
  }
  setSelected(values[0]);
  return <div>done</div>;
}
