const SETTINGS_STORAGE_KEY = "settings_data";

export interface LocalSettings {
  interval: number;
  shortBreakInterval: number;
  longBreakInterval: number;
  maxPomodoros: number;
  breakThemeEnabled: boolean;
  baseTheme: "light" | "dark";
}

export const settingsLocalStorage = {
  saveSettings: (settings: LocalSettings): void => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Error saving settings to localStorage:", error);
    }
  },

  loadSettings: (): LocalSettings | null => {
    try {
      const localData = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (localData) {
        return JSON.parse(localData) as LocalSettings;
      }
    } catch (error) {
      console.error("Error loading settings from localStorage:", error);
    }
    return null;
  },

  clearSettings: (): void => {
    try {
      localStorage.removeItem(SETTINGS_STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing settings from localStorage:", error);
    }
  },

  hasSettings: (): boolean => {
    try {
      return localStorage.getItem(SETTINGS_STORAGE_KEY) !== null;
    } catch {
      return false;
    }
  },
};
