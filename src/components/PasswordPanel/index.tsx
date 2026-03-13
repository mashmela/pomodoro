import React from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import TextField from "primitivies/TextField";
import Button from "primitivies/Button";

import { settingsStore } from "store/SettingsStore";

import {
  passwordPanelContainerStyles,
  passwordPanelClosingStyles,
  passwordHeaderStyles,
  passwordTitleStyles,
  closeButtonStyles,
  passwordContentStyles,
  inputGroupStyles,
  inputLabelStyles,
  errorMessageStyles,
  successMessageStyles,
  buttonContainerStyles,
} from "./styles.css";

interface PasswordPanelProps {
  isClosing?: boolean;
  onClose: () => void;
}

function PasswordPanel({ isClosing = false, onClose }: PasswordPanelProps) {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleChangePassword = async () => {
    const success = await settingsStore.changePassword();
    if (success) onClose();
  };

  return (
    <div className={cn(passwordPanelContainerStyles, { [passwordPanelClosingStyles]: isClosing })}>
      <div className={passwordHeaderStyles}>
        <h2 className={passwordTitleStyles}>Change Password</h2>
        <button className={closeButtonStyles} onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>

      <div className={passwordContentStyles}>
        {settingsStore.error && <div className={errorMessageStyles}>{settingsStore.error}</div>}
        {settingsStore.successMessage && <div className={successMessageStyles}>{settingsStore.successMessage}</div>}

        <div className={inputGroupStyles}>
          <span className={inputLabelStyles}>Old password</span>
          <TextField
            value={settingsStore.oldPassword}
            onChange={settingsStore.setOldPassword}
            type="password"
            placeholder="Enter old password"
          />
        </div>

        <div className={inputGroupStyles}>
          <span className={inputLabelStyles}>New password</span>
          <TextField
            value={settingsStore.newPassword}
            onChange={settingsStore.setNewPassword}
            type="password"
            placeholder="Enter new password (min 6 characters)"
          />
        </div>

        <div className={inputGroupStyles}>
          <span className={inputLabelStyles}>Confirm new password</span>
          <TextField
            value={settingsStore.confirmPassword}
            onChange={settingsStore.setConfirmPassword}
            type="password"
            placeholder="Confirm new password"
          />
        </div>

        <div className={buttonContainerStyles}>
          <Button
            onClick={handleChangePassword}
            disabled={settingsStore.isLoading}
            name={settingsStore.isLoading ? "Changing..." : "Change password"}
          />
        </div>
      </div>
    </div>
  );
}

export default observer(PasswordPanel);
