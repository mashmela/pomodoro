import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "themes/contract.css";

const circleBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const pomadoroStyles = recipe({
  base: circleBase,
  variants: {
    fullfilled: {
      true: {
        backgroundColor: vars.color.pomodoroFilled,
        boxShadow: `0 0 6px ${vars.color.pomodoroFilled}`,
      },
      false: {
        backgroundColor: "transparent",
        border: `1.5px solid ${vars.color.glassBorder}`,
        opacity: 0.6,
      },
    },
  },
  defaultVariants: {
    fullfilled: false,
  },
});
