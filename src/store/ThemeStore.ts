import { action, computed, makeObservable, observable } from "mobx";

import { appFadeInStyles, appFadeOutStyles } from "themes/styles.css";

import { lightTheme, darkTheme, restTheme } from "themes/themes.css";

export type AppBaseThemesType = "light" | "dark";
export type AppThemesType = AppBaseThemesType | "break";

const themeMap: Record<AppThemesType, string> = {
  light: lightTheme,
  dark: darkTheme,
  break: restTheme,
};

class ThemeStore {
  constructor() {
    makeObservable(this);
  }

  @observable currentTheme: AppThemesType = "dark";
  @observable baseTheme: AppBaseThemesType = "dark";
  @observable backgroundAnimation?: string;
  @observable autoBreakTheme: boolean = true;

  @computed get currentThemeStyles() {
    return themeMap[this.currentTheme];
  }

  @computed get currentBaseThemeStyles() {
    return themeMap[this.baseTheme];
  }

  @action.bound changeTheme(theme: AppThemesType) {
    this.currentTheme = theme;
    if (theme !== "break") {
      this.baseTheme = theme as AppBaseThemesType;
    }
    this.backgroundAnimation = this.backgroundAnimation === appFadeInStyles ? appFadeOutStyles : appFadeInStyles;
  }

  @action.bound changeBaseTheme(theme: AppBaseThemesType) {
    this.baseTheme = theme;
    if (this.autoBreakTheme && this.currentTheme !== "break") {
      this.currentTheme = theme;
    } else if (!this.autoBreakTheme) this.currentTheme = theme;
  }

  @action.bound setAutoBreakTheme(enabled: boolean) {
    this.autoBreakTheme = enabled;
    if (!enabled && this.currentTheme === "break") {
      this.currentTheme = this.baseTheme;
    }
  }

  @action.bound handleBreakPhase(isBreakPhase: boolean) {
    if (!this.autoBreakTheme) return;

    if (isBreakPhase) {
      if (this.currentTheme !== "break") {
        this.currentTheme = "break";
      }
    } else {
      if (this.currentTheme !== this.baseTheme) {
        this.currentTheme = this.baseTheme;
      }
    }
  }
}

export const themeStore = new ThemeStore();
