import React from "react";
import { observer } from "mobx-react-lite";

import Background from "components/Background";
import MenuActions from "components/MenuActions";
import ThemeProvider from "components/ThemeProvider";

import SettingsView from "views/SettingsView";

import { pageWrapperStyles } from "themes/common.css";

function SettingsPage() {
  return (
    <ThemeProvider>
      <MenuActions />
      <Background />
      <div className={pageWrapperStyles}>
        <SettingsView />
      </div>
    </ThemeProvider>
  );
}

export default observer(SettingsPage);
