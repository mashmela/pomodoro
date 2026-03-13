import React from "react";
import { observer } from "mobx-react-lite";

import OptionsPanel from "components/OptionsPanel";

import { settingsStore } from "store/SettingsStore";

import { debounce } from "utils/debounce";

import { Option } from "types/settingTypes";

import { settingContainerStyles, selectionContainerStyles, arrowStyles, arrowOpenStyles } from "./styles.css";

interface SelectionInterface {
  name: string;
  currentVariant?: string;
  options: Option[];
  panelTitle: string;
  currentValue: string | number;
  onSelect: (value: number | string) => void;
  isChangePassword?: boolean;
}

function Selection({
  name,
  currentVariant,
  options,
  panelTitle,
  currentValue,
  onSelect,
  isChangePassword = false,
}: SelectionInterface) {
  const isOpen = settingsStore.openPanel === name;

  const debouncedSave = React.useMemo(
    () =>
      debounce((value: string | number) => {
        onSelect(value);
        settingsStore.saveSettings();
        settingsStore.setPanel(null);
      }, 500),
    [onSelect],
  );

  const handleClick = () => {
    if (settingsStore.isPasswordPanelOpen) return settingsStore.setPasswordPanel(false);
    if (isOpen) return settingsStore.setPanel(null);

    if (isChangePassword) {
      settingsStore.setPanel(null);
      settingsStore.openPasswordPanel();
    } else {
      settingsStore.setPanel(name);
    }
  };

  const handleClose = () => {
    settingsStore.setPanel(null);
  };

  const handleSelect = (value: string | number) => {
    debouncedSave(value);
  };

  return (
    <>
      <div className={settingContainerStyles} onClick={handleClick}>
        <span>{name}</span>
        <div className={selectionContainerStyles}>
          {currentVariant && <span>{currentVariant}</span>}
          <div className={isOpen ? arrowOpenStyles : arrowStyles} />
        </div>
      </div>

      {!isChangePassword && isOpen && (
        <OptionsPanel
          options={options}
          title={panelTitle}
          currentValue={currentValue}
          onSelect={handleSelect}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default observer(Selection);
