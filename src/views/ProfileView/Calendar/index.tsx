import React from "react";
import { observer } from "mobx-react-lite";

import {
  calendarStyles,
  calendarHeaderStyles,
  monthLabelStyles,
  arrowButtonStyles,
  calendarGridStyles,
  dayHeaderStyles,
  dayCellStyles,
  pomodoroCircleStyles,
} from "./styles.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_HEADERS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

interface CalendarProps {
  history: Record<string, number>;
}

function Calendar({ history }: CalendarProps) {
  const now = React.useMemo(() => new Date(), []);

  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(now.getMonth());

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const canGoNext = React.useMemo(() => {
    if (year < currentYear) return true;
    if (year > currentYear) return false;
    return month < currentMonth;
  }, [year, month, currentYear, currentMonth]);

  const goToPrev = React.useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  }, [month]);

  const goToNext = React.useCallback(() => {
    if (!canGoNext) return;

    if (month === 11) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  }, [month, canGoNext]);

  const daysInMonth = React.useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);

  const firstDayOfWeek = React.useMemo(() => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  }, [year, month]);

  const cells = React.useMemo(() => {
    const result: Array<{ day: number; count: number } | null> = [];

    for (let index = 0; index < firstDayOfWeek; index++) {
      result.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      result.push({ day, count: history[dateKey] ?? 0 });
    }

    return result;
  }, [year, month, daysInMonth, firstDayOfWeek, history]);

  return (
    <div className={calendarStyles}>
      <div className={calendarHeaderStyles}>
        <button className={arrowButtonStyles} onClick={goToPrev}>
          ‹
        </button>
        <span className={monthLabelStyles}>
          {MONTHS[month]} {year}
        </span>
        <button className={arrowButtonStyles} onClick={goToNext} disabled={!canGoNext}>
          ›
        </button>
      </div>

      <div className={calendarGridStyles}>
        {DAY_HEADERS.map((day) => (
          <div key={day} className={dayHeaderStyles}>
            {day}
          </div>
        ))}

        {cells.map((cell, index) =>
          cell === null ? (
            <div key={`empty-${index}`} className={dayCellStyles} />
          ) : (
            <div key={cell.day} className={dayCellStyles}>
              <span>{cell.day}</span>
              {cell.count > 0 && <div className={pomodoroCircleStyles}>{cell.count}</div>}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default observer(Calendar);
