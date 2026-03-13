import { action, computed, makeObservable, observable } from "mobx";

import { sendApiRequest } from "utils/apiRequest";
import { pomodoroLocalStorage } from "utils/pomodoroLocalStorage";
import { settingsLocalStorage } from "utils/settingsLocalStorage";

import { UserInterface } from "types/userTypes";

import { pomodoroStore } from "./PomodoroStore";

const API_BASE = "http://localhost:5000";

const JSON_HEADERS = { "Content-Type": "application/json" };

function todayKey(): string {
  return new Date().toISOString().split("T")[0];
}

export class UserStore {
  constructor() {
    makeObservable(this);
  }

  @observable user: UserInterface | null = null;
  @observable isUserLoading = false;

  @computed get isAuth() {
    return !!this.user;
  }

  @action.bound setUser(user: UserInterface | null) {
    this.user = user;

    if (user) {
      pomodoroStore.setCompletedPomodoros(user.finishedPomodoros || 0);
    }
  }

  @action.bound setUserLoading(isUserLoading: boolean) {
    this.isUserLoading = isUserLoading;
  }

  @action.bound async loginUser(email: string, password: string) {
    if (this.isUserLoading) return;
    this.setUserLoading(true);

    const localCount = pomodoroLocalStorage.getAndClearLocalPomodoros();

    const response = await sendApiRequest<UserInterface>(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: JSON_HEADERS,
      credentials: "include",
      body: JSON.stringify({ email, password, finishedPomodoros: localCount }),
    });

    this.setUserLoading(false);
    if (!response.ok) return;

    this.setUser(response.data);
  }

  @action.bound async createUser(email: string, password: string, name: string) {
    if (this.isUserLoading) return;
    this.setUserLoading(true);

    const localCount = pomodoroLocalStorage.getAndClearLocalPomodoros();

    const response = await sendApiRequest<UserInterface>(`${API_BASE}/api/auth/registration`, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
        name: name.trim(),
        finishedPomodoros: localCount,
      }),
      credentials: "include",
    });

    this.setUserLoading(false);
    if (!response.ok) return;

    this.setUser(response.data);
  }

  @action.bound loadOfflineData() {
    settingsLocalStorage.loadSettings();

    const pomodoroCount = pomodoroLocalStorage.getLocalPomodoros();
    if (pomodoroCount) {
      pomodoroStore.setCompletedPomodoros(pomodoroCount);
    }
  }

  @action.bound async checkToken() {
    if (this.isUserLoading) return;
    this.setUserLoading(true);

    try {
      const response = await sendApiRequest<UserInterface>(`${API_BASE}/api/auth/check`, {
        method: "GET",
        headers: JSON_HEADERS,
        credentials: "include",
      });

      this.setUserLoading(false);

      if (!response.ok) {
        this.loadOfflineData();
        return;
      }

      this.setUser(response.data);
    } catch (error) {
      console.log("Server is not available, switching to offline mode", error);
      this.setUserLoading(false);
      this.loadOfflineData();
    }
  }

  @action.bound async incrementPomodoro() {
    if (!this.user) return;

    const response = await sendApiRequest<{ finishedPomodoros: number }>(`${API_BASE}/api/pomodoro/increment`, {
      method: "POST",
      headers: JSON_HEADERS,
      credentials: "include",
    });

    if (!response.ok) return;

    const today = todayKey();
    this.user = {
      ...this.user,
      finishedPomodoros: response.data.finishedPomodoros,
      pomodoroHistory: {
        ...this.user.pomodoroHistory,
        [today]: response.data.finishedPomodoros,
      },
    };
    pomodoroStore.setCompletedPomodoros(response.data.finishedPomodoros);
  }

  @action.bound async updateProfile(name: string, imgSrc: string) {
    if (!this.user) return;

    const response = await sendApiRequest<UserInterface>(`${API_BASE}/api/users/profile`, {
      method: "PUT",
      headers: JSON_HEADERS,
      credentials: "include",
      body: JSON.stringify({ name, imgSrc }),
    });

    if (response.ok) {
      this.setUser(response.data);
    }
  }

  @action.bound async logoutUser() {
    if (this.isUserLoading) return;
    this.setUserLoading(true);
    pomodoroLocalStorage.savePomodoros(pomodoroStore.completedPomodoros);

    const response = await sendApiRequest<UserInterface>(`${API_BASE}/api/auth/logout`, {
      method: "POST",
      headers: JSON_HEADERS,
      credentials: "include",
    });

    this.setUserLoading(false);
    if (!response.ok) return;
    this.setUser(null);
  }
}

export const userStore = new UserStore();
