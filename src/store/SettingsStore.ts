import { action, computed, makeObservable, observable, runInAction } from "mobx";

import { settingsApi } from "utils/settingsApi";
import { usersApi } from "utils/usersApi";
import { settingsLocalStorage, LocalSettings } from "utils/settingsLocalStorage";

import { userStore } from "./UserStore";
import { themeStore } from "./ThemeStore";

export class SettingsStore {
  private isInitialized = false;

  constructor() {
    makeObservable(this);
    Promise.resolve().then(() => {
      if (!this.isInitialized) {
        this.loadSettings();
        this.isInitialized = true;
      }
    });
  }

  @observable interval = 25;
  @observable shortBreakInterval = 5;
  @observable longBreakInterval = 15;
  @observable maxPomodoros = 4;
  @observable breakThemeEnabled = true;
  @observable baseTheme: "light" | "dark" = "light";

  @observable oldPassword = "";
  @observable newPassword = "";
  @observable confirmPassword = "";

  @observable isLoading = false;
  @observable error: string | null = null;
  @observable successMessage: string | null = null;

  @observable isPasswordPanelOpen = false;
  @observable openPanel: string | null = null;

  @action.bound setPanel(panelName: string | null) {
    this.openPanel = panelName;
  }

  @action.bound async loadSettings() {
    try {
      const localSettings = settingsLocalStorage.loadSettings();
      if (localSettings) {
        runInAction(() => {
          this.setAllSettings(localSettings);
        });
      }

      if (userStore.isAuth) {
        runInAction(() => {
          this.isLoading = true;
        });

        try {
          const response = await settingsApi.getSettings();
          if (response.ok && response.data) {
            settingsLocalStorage.saveSettings(response.data);
            runInAction(() => {
              this.setAllSettings(response.data);
            });
          }
        } catch (error) {
          console.log("Failed to sync settings with server, using local", error);
        } finally {
          runInAction(() => {
            this.isLoading = false;
          });
        }
      }
    } catch (error) {
      console.error("Error in loadSettings:", error);
    }
  }

  @action.bound async saveSettings() {
    const settings = this.getCurrentSettings();

    settingsLocalStorage.saveSettings(settings);

    if (userStore.isAuth) {
      try {
        const response = await settingsApi.updateSettings(settings);
        if (!response.ok) {
          console.error("Failed to save settings to server");
        }
      } catch (error) {
        console.error("Error saving settings to server", error);
      }
    }
  }

  @action.bound openPasswordPanel() {
    this.oldPassword = "";
    this.newPassword = "";
    this.confirmPassword = "";
    this.error = null;
    this.successMessage = null;
    this.isPasswordPanelOpen = true;
  }

  @action.bound setPasswordPanel(isOpen: boolean) {
    this.isPasswordPanelOpen = isOpen;
  }

  @action.bound async changePassword() {
    this.error = null;
    this.successMessage = null;

    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.error = "All fields are required";
      return false;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.error = "New password and confirmation do not match";
      return false;
    }

    if (this.newPassword.length < 6) {
      this.error = "New password must be at least 6 characters";
      return false;
    }

    if (this.oldPassword === this.newPassword) {
      this.error = "New password must be different from old password";
      return false;
    }

    this.isLoading = true;

    try {
      const response = await usersApi.updatePassword(this.oldPassword, this.newPassword);

      if (response.ok) {
        this.successMessage = response.data?.message || "Password changed successfully";
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";

        setTimeout(() => {
          runInAction(() => {
            this.setPasswordPanel(false);
            this.successMessage = null;
          });
        }, 1500);

        return true;
      } else {
        return false;
      }
    } catch (error) {
      this.error = "Error changing password";
      console.error(error);
      return false;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  @action.bound setOldPassword(oldPassword: string) {
    this.oldPassword = oldPassword;
    this.error = null;
  }

  @action.bound setNewPassword(newPassword: string) {
    this.newPassword = newPassword;
    this.error = null;
  }

  @action.bound setConfirmPassword(confirmPassword: string) {
    this.confirmPassword = confirmPassword;
    this.error = null;
  }

  @action.bound setAllSettings(settings: LocalSettings) {
    this.interval = settings.interval;
    this.shortBreakInterval = settings.shortBreakInterval;
    this.longBreakInterval = settings.longBreakInterval;
    this.maxPomodoros = settings.maxPomodoros;
    this.baseTheme = settings.baseTheme;
    this.breakThemeEnabled = settings.breakThemeEnabled;

    themeStore.changeBaseTheme(settings.baseTheme);
    themeStore.setAutoBreakTheme(settings.breakThemeEnabled);
  }

  @action.bound setInterval(interval: number) {
    this.interval = interval;
    this.saveSettings();
  }

  @action.bound setShortBreakInterval(shortBreakInterval: number) {
    this.shortBreakInterval = shortBreakInterval;
    this.saveSettings();
  }

  @action.bound setLongBreakInterval(longBreakInterval: number) {
    this.longBreakInterval = longBreakInterval;
    this.saveSettings();
  }

  @action.bound setMaxPomodoros(maxPomodoros: number) {
    this.maxPomodoros = maxPomodoros;
    this.saveSettings();
  }

  @action.bound setBaseTheme(baseTheme: "light" | "dark") {
    this.baseTheme = baseTheme;
    themeStore.changeBaseTheme(baseTheme);
    this.saveSettings();
  }

  @action.bound setBreakThemeEnabled(enabled: boolean) {
    this.breakThemeEnabled = enabled;
    themeStore.setAutoBreakTheme(enabled);
    this.saveSettings();
  }

  private getCurrentSettings(): LocalSettings {
    return {
      interval: this.interval,
      shortBreakInterval: this.shortBreakInterval,
      longBreakInterval: this.longBreakInterval,
      maxPomodoros: this.maxPomodoros,
      breakThemeEnabled: this.breakThemeEnabled,
      baseTheme: this.baseTheme,
    };
  }

  @computed get selectedInterval() {
    return `${this.interval} min`;
  }

  @computed get selectedShortBreakInterval() {
    return `${this.shortBreakInterval} min`;
  }

  @computed get selectedLongBreakInterval() {
    return `${this.longBreakInterval} min`;
  }

  @computed get selectedMaxPomodoros() {
    return `${this.maxPomodoros} pomodoros`;
  }

  @computed get passwordStatus() {
    return this.successMessage || "Change password";
  }
}

export const settingsStore = new SettingsStore();
