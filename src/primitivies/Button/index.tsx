import React from "react";

import { buttonStyles } from "./styles.css";

interface ButtonInterface {
  name: string;
  onClick: () => void;
  disabled?: boolean;
  size?: string;
}

function Button({ name, onClick, disabled = false }: ButtonInterface) {
  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default React.memo(Button);
