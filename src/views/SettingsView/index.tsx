import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";

import Selection from "components/Selection";
import PasswordPanel from "components/PasswordPanel";

import { userStore } from "store/UserStore";
import { themeStore } from "store/ThemeStore";
import { settingsStore } from "store/SettingsStore";

import { debounce } from "utils/debounce";

import { intervalOptions, longBreakOptions, maxPomodorosOptions, shortBreakOptions, themeOptions } from "./options";

import {
  settingsPageContainerStyles,
  settingsTitleStyles,
  settingsPageShiftedStyles,
  toggleRowStyles,
  toggleLabelStyles,
  toggleTrackStyles,
  toggleTrackActiveStyles,
  toggleThumbStyles,
  toggleThumbActiveStyles,
  sectionDividerStyles,
} from "./styles.css";

function SettingsView() {
  const { isAuth } = userStore;
  const breakThemeEnabled = settingsStore.breakThemeEnabled;

  const debouncedBreakThemeToggle = React.useMemo(
    () =>
      debounce(() => {
        const newValue = !breakThemeEnabled;
        settingsStore.setBreakThemeEnabled(newValue);
        settingsStore.saveSettings();
      }, 500),
    [breakThemeEnabled],
  );

  const debouncedBaseThemeChange = React.useMemo(
    () =>
      debounce((value) => {
        console.log(value);
        settingsStore.setBaseTheme(value);
        settingsStore.saveSettings();
      }, 500),
    [],
  );

  const handleBreakThemeToggle = React.useCallback(() => {
    debouncedBreakThemeToggle();
  }, [debouncedBreakThemeToggle]);

  const handleThemeChange = React.useCallback(
    (value: string | number) => debouncedBaseThemeChange(value),
    [debouncedBaseThemeChange],
  );

  return (
    <>
      <div
        className={cn(settingsPageContainerStyles, {
          [settingsPageShiftedStyles]: settingsStore.isPasswordPanelOpen,
        })}
      >
        <h1 className={settingsTitleStyles}>Settings</h1>
        <div className={sectionDividerStyles}>Appearance</div>
        <Selection
          name="Theme"
          currentVariant={themeStore.baseTheme === "light" ? "Light" : "Dark"}
          options={themeOptions}
          panelTitle="Theme"
          currentValue={themeStore.baseTheme}
          onSelect={handleThemeChange}
        />
        <div
          className={toggleRowStyles}
          onClick={handleBreakThemeToggle}
          role="switch"
          aria-checked={breakThemeEnabled}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleBreakThemeToggle()}
        >
          <span className={toggleLabelStyles}>Break theme</span>
          <div className={cn(toggleTrackStyles, { [toggleTrackActiveStyles]: breakThemeEnabled })}>
            <div className={cn(toggleThumbStyles, { [toggleThumbActiveStyles]: breakThemeEnabled })} />
          </div>
        </div>
        <div className={sectionDividerStyles}>Timer</div>
        <Selection
          name="Interval length"
          currentVariant={settingsStore.selectedInterval}
          options={intervalOptions}
          panelTitle="Interval length"
          currentValue={settingsStore.interval}
          onSelect={(value) => settingsStore.setInterval(value as number)}
        />
        <Selection
          name="Short break"
          currentVariant={settingsStore.selectedShortBreakInterval}
          options={shortBreakOptions}
          panelTitle="Short break"
          currentValue={settingsStore.shortBreakInterval}
          onSelect={(value) => settingsStore.setShortBreakInterval(value as number)}
        />
        <Selection
          name="Long break"
          currentVariant={settingsStore.selectedLongBreakInterval}
          options={longBreakOptions}
          panelTitle="Long break"
          currentValue={settingsStore.longBreakInterval}
          onSelect={(value) => settingsStore.setLongBreakInterval(value as number)}
        />
        <Selection
          name="Max pomodoros"
          currentVariant={settingsStore.selectedMaxPomodoros}
          options={maxPomodorosOptions}
          panelTitle="Max pomodoros"
          currentValue={settingsStore.maxPomodoros}
          onSelect={(value) => settingsStore.setMaxPomodoros(value as number)}
        />

        {isAuth && (
          <>
            <div className={sectionDividerStyles}>Account</div>
            <Selection
              name="Password"
              currentVariant={settingsStore.passwordStatus}
              options={[]}
              panelTitle=""
              currentValue=""
              onSelect={() => {}}
              isChangePassword
            />
          </>
        )}
      </div>

      {settingsStore.isPasswordPanelOpen && <PasswordPanel onClose={() => settingsStore.setPasswordPanel(false)} />}
    </>
  );
}

export default observer(SettingsView);
