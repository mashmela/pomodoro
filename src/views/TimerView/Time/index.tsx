import React from "react";
import { observer } from "mobx-react-lite";

import { pomodoroStore } from "store/PomodoroStore";

import TimerButtons from "../TimerButtons";

import { timersStyles } from "./styles.css";

function Time() {
  const { formattedTime } = pomodoroStore;

  return (
    <>
      <div className={timersStyles}>{formattedTime}</div>
      <TimerButtons />
    </>
  );
}

export default observer(Time);
