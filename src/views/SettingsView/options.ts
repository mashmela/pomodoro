import { Option } from "types/settingTypes";

export const intervalOptions: Option[] = [
  { name: "25 min", value: 25 },
  { name: "30 min", value: 30 },
  { name: "45 min", value: 45 },
  { name: "60 min", value: 60 },
];

export const themeOptions: Option[] = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
];

export const shortBreakOptions: Option[] = [
  { name: "5 min", value: 5 },
  { name: "10 min", value: 10 },
  { name: "15 min", value: 15 },
  { name: "20 min", value: 20 },
];

export const longBreakOptions: Option[] = [
  { name: "15 min", value: 15 },
  { name: "20 min", value: 20 },
  { name: "30 min", value: 30 },
  { name: "45 min", value: 45 },
];

export const maxPomodorosOptions: Option[] = [
  { name: "4 pomodoros", value: 4 },
  { name: "8 pomodoros", value: 8 },
  { name: "12 pomodoros", value: 12 },
  { name: "16 pomodoros", value: 16 },
];
