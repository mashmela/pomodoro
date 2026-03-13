import { action, computed, makeObservable, observable } from "mobx";

import { pomodoroLocalStorage } from "utils/pomodoroLocalStorage";

import { userStore } from "./UserStore";
import { themeStore } from "./ThemeStore";
import { settingsStore } from "./SettingsStore";

export type TimerMode = "work" | "shortBreak" | "longBreak";

export class PomodoroStore {
  constructor() {
    makeObservable(this);
    this.completedPomodoros = pomodoroLocalStorage.getLocalPomodoros();
  }

  @observable mode: TimerMode = "work";
  @observable isPaused = false;
  @observable isRunning = false;

  @observable timeRemaining = settingsStore.interval * 60 * 1000;
  @observable completedPomodoros = 0;

  private timerId: NodeJS.Timeout | null = null;
  private lastUpdateTime: number = 0;

  @computed get isGoalCompleted() {
    return this.completedPomodoros >= settingsStore.maxPomodoros;
  }

  @computed get workInterval() {
    return settingsStore.interval * 60 * 1000;
  }

  @computed get shortBreakMs() {
    return settingsStore.shortBreakInterval * 60 * 1000;
  }

  @computed get longBreakMs() {
    return settingsStore.longBreakInterval * 60 * 1000;
  }

  @computed get maxPomodoros() {
    return settingsStore.maxPomodoros;
  }

  @computed get currentInterval() {
    if (this.mode === "shortBreak") return this.shortBreakMs;
    if (this.mode === "longBreak") return this.longBreakMs;
    return this.workInterval;
  }

  @computed get formattedTime() {
    const ms = this.isRunning ? this.timeRemaining : this.currentInterval;
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }

  @action.bound playSound = () => {
    const audio = new Audio("/public/files/sounds/universfield-notification-480567.mp3");
    audio.play().catch((error) => {
      console.error("Ошибка воспроизведения:", error);
    });
  };

  @action.bound setCompletedPomodoros(count: number) {
    this.completedPomodoros = count;
  }

  @action.bound startTimer() {
    if (this.isRunning && !this.isPaused) return;

    if (!this.isRunning) {
      this.timeRemaining = this.currentInterval;
    }

    this.isRunning = true;
    this.isPaused = false;
    this.lastUpdateTime = Date.now();

    this.clearTimer();

    this.timerId = setInterval(() => {
      this.updateTime();
    }, 100);
  }

  @action.bound updateTime() {
    if (this.isPaused || !this.isRunning) return;

    const now = Date.now();
    const elapsed = now - this.lastUpdateTime;

    this.timeRemaining = Math.max(0, this.timeRemaining - elapsed);
    this.lastUpdateTime = now;

    if (this.timeRemaining <= 0) {
      if (this.mode === "work") {
        this.finishPomodoro();
      } else {
        this.finishBreak();
      }
    }
  }

  @action.bound togglePause() {
    if (!this.isRunning) return;

    if (!this.isPaused) {
      this.isPaused = true;
    } else {
      this.isPaused = false;
      this.lastUpdateTime = Date.now();
    }
  }

  @action.bound restartTimer() {
    this.clearTimer();
    this.isRunning = false;
    this.isPaused = false;
    this.lastUpdateTime = 0;
  }

  @action.bound skipBreak() {
    this.clearTimer();
    this.mode = "work";
    this.isRunning = false;
    this.isPaused = false;
    this.lastUpdateTime = 0;
    themeStore.handleBreakPhase(false);
  }

  @action.bound private finishPomodoro() {
    this.clearTimer();
    this.isRunning = false;
    this.playSound();
    themeStore.handleBreakPhase(true);

    const newCount = this.completedPomodoros + 1;
    this.setCompletedPomodoros(newCount);

    this.mode = newCount % 4 === 0 ? "longBreak" : "shortBreak";

    pomodoroLocalStorage.savePomodoros(this.completedPomodoros);
    if (userStore.isAuth) userStore.incrementPomodoro();
  }

  @action.bound private finishBreak() {
    this.clearTimer();
    this.isRunning = false;
    this.mode = "work";
    this.playSound();
    themeStore.handleBreakPhase(false);
  }

  @action.bound private clearTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

export const pomodoroStore = new PomodoroStore();
