export type SettingType = "interval" | "shortBreak" | "longBreak" | "maxPomodoros" | "theme";

export interface Option {
  name: string;
  value: number | string;
  description?: string;
}
