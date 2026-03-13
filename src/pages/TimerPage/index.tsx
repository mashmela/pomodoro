import React from "react";
import { observer } from "mobx-react-lite";

import Background from "components/Background";
import MenuActions from "components/MenuActions";
import ThemeProvider from "components/ThemeProvider";

import TimerView from "views/TimerView";

import { pageWrapperStyles } from "themes/common.css";

function TimerPage() {
  return (
    <ThemeProvider>
      <MenuActions />
      <Background />
      <div className={pageWrapperStyles}>
        <TimerView />
      </div>
    </ThemeProvider>
  );
}

export default observer(TimerPage);
