interface PomodoroData {
  date: string;
  count: number;
}

const POMODORO_STORAGE_KEY = "pomodoro_data";

export const pomodoroLocalStorage = {
  getAndClearLocalPomodoros: (): number => {
    const localData = localStorage.getItem(POMODORO_STORAGE_KEY);
    let localCount = 0;

    if (localData) {
      try {
        const parsed = JSON.parse(localData) as PomodoroData;
        const today = new Date().toDateString();

        if (parsed.date === today) {
          localCount = parsed.count;
        }
      } catch (error) {
        console.error("Ошибка парсинга localStorage", error);
      }

      localStorage.removeItem(POMODORO_STORAGE_KEY);
    }

    return localCount;
  },

  savePomodoros: (count: number): void => {
    const today = new Date().toDateString();
    localStorage.setItem(
      POMODORO_STORAGE_KEY,
      JSON.stringify({
        date: today,
        count,
      }),
    );
  },

  getLocalPomodoros: (): number => {
    const localData = localStorage.getItem(POMODORO_STORAGE_KEY);

    if (localData) {
      try {
        const parsed = JSON.parse(localData) as PomodoroData;
        const today = new Date().toDateString();

        if (parsed.date === today) {
          return parsed.count;
        }
      } catch (error) {
        console.error("Ошибка парсинга localStorage", error);
      }
    }

    return 0;
  },

  hasLocalPomodoros: (): boolean => {
    const count = pomodoroLocalStorage.getLocalPomodoros();
    return count > 0;
  },

  clear: (): void => {
    localStorage.removeItem(POMODORO_STORAGE_KEY);
  },
};
