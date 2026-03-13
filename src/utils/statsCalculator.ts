export interface ProfileStats {
  total: number;
  currentStreak: number;
  longestStreak: number;
  bestDay: string | null;
  weekDayAvg: number[];
  message: string;
}

export const calculateStats = (history: Record<string, number>): ProfileStats => {
  const dates = Object.keys(history)
    .map((dateStr) => new Date(dateStr))
    .sort((a, b) => a.getTime() - b.getTime());

  if (dates.length === 0) {
    return {
      total: 0,
      currentStreak: 0,
      longestStreak: 0,
      bestDay: null,
      weekDayAvg: [0, 0, 0, 0, 0, 0, 0],
      message: "🎯 Start your first pomodoro today!",
    };
  }

  const total = Object.values(history).reduce((sum, count) => sum + count, 0);

  let currentStreak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkDate = new Date(today);
  while (true) {
    const dateStr = checkDate.toISOString().split("T")[0];
    if (history[dateStr] > 0) {
      currentStreak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  let longestStreak = 0;
  let currentRun = 0;
  let prevDate: Date | null = null;

  dates.forEach((date) => {
    if (prevDate) {
      const diffDays = Math.floor((date.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        currentRun++;
      } else {
        longestStreak = Math.max(longestStreak, currentRun);
        currentRun = 1;
      }
    } else {
      currentRun = 1;
    }
    prevDate = date;
  });
  longestStreak = Math.max(longestStreak, currentRun);

  const weekDayStats = [0, 0, 0, 0, 0, 0, 0];
  const weekDayCount = [0, 0, 0, 0, 0, 0, 0];

  Object.entries(history).forEach(([dateStr, count]) => {
    const dayOfWeek = new Date(dateStr).getDay();
    const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    weekDayStats[adjustedDay] += count;
    weekDayCount[adjustedDay] += count > 0 ? 1 : 0;
  });

  const weekDayAvg = weekDayStats.map((sum, i) => (weekDayCount[i] > 0 ? Math.round(sum / weekDayCount[i]) : 0));

  const maxDay = Math.max(...weekDayAvg);
  const bestDayIndex = weekDayAvg.indexOf(maxDay);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const bestDay = maxDay > 0 ? daysOfWeek[bestDayIndex] : null;

  let message = "";
  if (currentStreak >= 7) {
    message = `🔥 Amazing! ${currentStreak} days streak!`;
  } else if (currentStreak >= 3) {
    message = `✨ Good job! ${currentStreak} days in a row!`;
  } else if (total > 0) {
    message = "💪 Keep going! You're doing great!";
  } else {
    message = "🎯 Start your first pomodoro today!";
  }

  return {
    total,
    currentStreak,
    longestStreak,
    bestDay,
    weekDayAvg,
    message,
  };
};
