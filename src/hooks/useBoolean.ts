import React from "react";

export function useBoolean(initialValue?: boolean) {
  const [value, setValue] = React.useState(initialValue || false);

  const handleToggleOn = React.useCallback(() => setValue(true), []);
  const handleToggleOff = React.useCallback(() => setValue(false), []);

  return [value, handleToggleOn, handleToggleOff] as const;
}
