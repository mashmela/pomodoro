import React from "react";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";

import { userStore } from "store/UserStore";

import {
  buttonIconStyles,
  actionsStyles,
  iconStyles,
  imgUserStyles,
  actionsGroupStyles,
  mobileActionsStyles,
  mobileSpacerStyles,
  mobileProfileButtonStyles,
} from "./styles.css";

function MenuActions() {
  const { user, logoutUser } = userStore;
  const navigate = useNavigate();

  const handlePlayClick = React.useCallback(() => navigate("/"), [navigate]);
  const handleProfileClick = React.useCallback(() => navigate("/profile"), [navigate]);
  const handleSettingsClick = React.useCallback(() => navigate("/settings"), [navigate]);

  const imgUser = React.useMemo(() => (user && user.imgSrc ? user.imgSrc : "files/icons/user.png"), [user]);

  return (
    <>
      <div className={actionsStyles}>
        <div className={actionsGroupStyles}>
          <button className={buttonIconStyles} onClick={handlePlayClick}>
            <img className={iconStyles} src="files/icons/play.png" alt="timer" />
          </button>
        </div>
        <div className={actionsGroupStyles}>
          {user && (
            <button className={buttonIconStyles} onClick={logoutUser}>
              <img className={iconStyles} src="files/icons/logout.png" alt="logout" />
            </button>
          )}
          <button className={buttonIconStyles} onClick={handleSettingsClick}>
            <img className={iconStyles} src="files/icons/settings-outline.png" alt="settings" />
          </button>
          <img className={imgUserStyles} onClick={handleProfileClick} src={imgUser} alt="user" />
        </div>
      </div>

      <div className={mobileActionsStyles}>
        <button className={buttonIconStyles} onClick={handlePlayClick}>
          <img className={iconStyles} src="files/icons/play.png" alt="timer" />
        </button>
        <div className={mobileSpacerStyles} aria-hidden="true" />
        <button className={mobileProfileButtonStyles} onClick={handleProfileClick}>
          <img className={imgUserStyles} src={imgUser} alt="user" />
        </button>
        <button className={buttonIconStyles} onClick={handleSettingsClick}>
          <img className={iconStyles} src="files/icons/settings-outline.png" alt="settings" />
        </button>
        {user && (
          <button className={buttonIconStyles} onClick={logoutUser}>
            <img className={iconStyles} src="files/icons/logout.png" alt="logout" />
          </button>
        )}
      </div>
    </>
  );
}

export default observer(MenuActions);
