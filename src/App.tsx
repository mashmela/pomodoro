import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingView from "views/LoadingView";

import TimerPage from "pages/TimerPage";
import LoginPage from "pages/LoginPage";
import ProfilePage from "pages/ProfilePage";
import SettingsPage from "pages/SettingsPage";
import CreateUserPage from "pages/CreateUserPage";

import { userStore } from "store/UserStore";
import { themeStore } from "store/ThemeStore";
import { pomodoroStore } from "store/PomodoroStore";

import { appStyles } from "themes/styles.css";

function App() {
  React.useLayoutEffect(() => {
    if (!userStore.user) userStore.checkToken();
  }, []);

  React.useEffect(() => {
    const isBreakPhase = pomodoroStore.mode === "shortBreak" || pomodoroStore.mode === "longBreak";
    themeStore.handleBreakPhase(isBreakPhase);
  }, []);

  if (userStore.isUserLoading) {
    return (
      <div className={cn(appStyles, themeStore.currentThemeStyles)}>
        <LoadingView />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimerPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
