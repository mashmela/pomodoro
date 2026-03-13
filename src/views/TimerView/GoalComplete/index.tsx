import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { comletedButtonStyles, goalCompleteContainerStyles, messageStyles } from "./styles.css";

function GoalComplete() {
  const navigate = useNavigate();

  const handleSettingsClick = React.useCallback(() => navigate("/settings"), [navigate]);

  return (
    <>
      <div className={goalCompleteContainerStyles}>
        <div className={messageStyles}>Goal is Complete!</div>
      </div>
      <button className={comletedButtonStyles} onClick={handleSettingsClick}>
        You can choose a larger goal in the settings
      </button>
    </>
  );
}

export default observer(GoalComplete);
