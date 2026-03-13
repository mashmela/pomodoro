export interface SettingsInterface {
  interval: number;
  shortBreakInterval: number;
  longBreakInterval: number;
  maxPomodoros: number;
  breakThemeEnabled: boolean;
  baseTheme: "light" | "dark";
}

export interface UserInterface {
  id: number;
  email: string;
  name: string;
  token?: string;
  imgSrc: string | null;
  finishedPomodoros: number;
  pomodoroHistory: Record<string, number>;
  settings: SettingsInterface;
}
