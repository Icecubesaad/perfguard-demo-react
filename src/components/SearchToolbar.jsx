import { Button } from "./Button.jsx";

export function SearchToolbar({ onSave }) {
  return <Button onClick={() => onSave()} label="Save" />;
}
