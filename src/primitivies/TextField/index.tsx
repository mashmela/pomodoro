import React from "react";

import { inputStyles } from "./styles.css";

interface InputInterface {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

function TextField({ value, onChange, placeholder, type = "text" }: InputInterface) {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return <input type={type} className={inputStyles} placeholder={placeholder} value={value} onChange={handleChange} />;
}

export default React.memo(TextField);
