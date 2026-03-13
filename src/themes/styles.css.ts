import { globalStyle, keyframes, style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("*", {
  boxSizing: "border-box",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
});

const themeFadeIn = keyframes({
  "0%": { opacity: 1 },
  "25%": { opacity: 0.95 },
  "100%": { opacity: 1 },
});

const themeFadeOut = keyframes({
  "0%": { opacity: 1 },
  "25%": { opacity: 0.95 },
  "100%": { opacity: 1 },
});

export const appFadeInStyles = style({
  animationName: themeFadeIn,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in",
});

export const appFadeOutStyles = style({
  animationName: themeFadeOut,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-out",
});

export const appStyles = style({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "100vh",
  background: vars.color.bg,
  padding: "24px",
  overflow: "hidden",
});
