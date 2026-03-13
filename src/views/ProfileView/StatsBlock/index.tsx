import { observer } from "mobx-react-lite";

import { ProfileStats } from "utils/statsCalculator";

import {
  statsCardStyles,
  statsHeaderStyles,
  statsGridStyles,
  statItemStyles,
  statIconStyles,
  statContentStyles,
  statValueStyles,
  statLabelStyles,
  streakLabelStyles,
  dividerStyles,
  weekStatsStyles,
  weekDayStyles,
  weekDayLabelStyles,
  weekDayValueStyles,
  motivationTextStyles,
  loadingStyles,
} from "./styles.css";

interface StatsBlockProps {
  stats: ProfileStats;
  isLoading?: boolean;
}

function StatsBlock({ stats, isLoading }: StatsBlockProps) {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  if (isLoading) {
    return <div className={loadingStyles}>Loading statistics...</div>;
  }

  return (
    <div className={statsCardStyles}>
      <div className={statsHeaderStyles}>
        <span className={motivationTextStyles}>{stats.total === 0 ? "✨ Start your journey!" : stats.message}</span>
      </div>
      <div className={statsGridStyles}>
        <div className={statItemStyles}>
          <span className={statIconStyles}>🍅</span>
          <div className={statContentStyles}>
            <span className={statValueStyles}>{stats.total}</span>
            <span className={statLabelStyles}>Total</span>
          </div>
        </div>
        <div className={dividerStyles} />
        <div className={statItemStyles}>
          <span className={statIconStyles}>🔥</span>
          <div className={statContentStyles}>
            <span className={statValueStyles}>{stats.currentStreak}</span>
            <span className={statLabelStyles}>{stats.currentStreak === 1 ? "day" : "days"}</span>
          </div>
        </div>
        <div className={dividerStyles} />
        <div className={statItemStyles}>
          <span className={statIconStyles}>🏆</span>
          <div className={statContentStyles}>
            <span className={statValueStyles}>{stats.longestStreak}</span>
            <span className={statLabelStyles}>Best</span>
          </div>
        </div>
      </div>
      <div className={weekStatsStyles}>
        {weekDays.map((day, i) => (
          <div key={day} className={weekDayStyles}>
            <div className={weekDayLabelStyles}>{day}</div>
            <div className={weekDayValueStyles}>{stats.weekDayAvg[i] > 0 ? stats.weekDayAvg[i] : "·"}</div>
          </div>
        ))}
      </div>
      {stats.currentStreak > 0 && (
        <div className={streakLabelStyles}>
          {stats.currentStreak} day{stats.currentStreak !== 1 ? "s" : ""} in a row!
        </div>
      )}
    </div>
  );
}

export default observer(StatsBlock);
