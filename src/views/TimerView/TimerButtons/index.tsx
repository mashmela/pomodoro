import React from "react";
import { observer } from "mobx-react-lite";

import { pomodoroStore } from "store/PomodoroStore";

import { buttonsContainerStyles, buttonStyles } from "./styles.css";

function TimerButtons() {
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (pomodoroStore.isRunning) {
          pomodoroStore.togglePause();
        } else {
          pomodoroStore.startTimer();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const { mode, isRunning, isPaused } = pomodoroStore;
  const isBreak = mode !== "work";

  return (
    <>
      {!isRunning ? (
        <div className={buttonsContainerStyles}>
          <button className={buttonStyles} onClick={() => pomodoroStore.startTimer()}>
            {isBreak ? "Start Break" : "Start"}
          </button>
          {isBreak && (
            <button className={buttonStyles} onClick={() => pomodoroStore.skipBreak()}>
              Skip
            </button>
          )}
        </div>
      ) : (
        <div className={buttonsContainerStyles}>
          <button className={buttonStyles} onClick={() => pomodoroStore.togglePause()}>
            {isPaused ? "Resume" : "Pause"}
          </button>
          <button
            className={buttonStyles}
            onClick={() => (isBreak ? pomodoroStore.skipBreak() : pomodoroStore.restartTimer())}
          >
            {isBreak ? "Skip" : "Restart"}
          </button>
        </div>
      )}
    </>
  );
}

export default observer(TimerButtons);
