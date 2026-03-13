import React from "react";
import { observer } from "mobx-react-lite";

import { pomodoroStore } from "store/PomodoroStore";

import Time from "./Time";
import GoalComplete from "./GoalComplete";
import PomadoroTimer from "./PomadoroTimer";

import { viewStyles, pomadorosContainerStyles, modeLabelStyles } from "./styles.css";

const MODE_LABELS = {
  work: "Work Session",
  shortBreak: "Short Break",
  longBreak: "Long Break",
};

function TimerView() {
  const { mode, completedPomodoros, maxPomodoros, isGoalCompleted } = pomodoroStore;

  return (
    <div className={viewStyles}>
      <div className={modeLabelStyles}>{MODE_LABELS[mode]}</div>
      {isGoalCompleted ? <GoalComplete /> : <Time />}
      <div className={pomadorosContainerStyles}>
        {new Array(maxPomodoros).fill(1).map((_, index) => (
          <PomadoroTimer fullfilled={completedPomodoros > index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default observer(TimerView);
