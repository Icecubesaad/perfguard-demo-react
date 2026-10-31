import { useCallback } from "react";
import { Button } from "./Button.jsx";

export function SearchToolbar({ onSave }) {
  const handleClick = useCallback(() => onSave(), [onSave]);
  return <Button onClick={handleClick} label="Save" />;
}
