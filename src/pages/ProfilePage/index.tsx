import React from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import Background from "components/Background";
import MenuActions from "components/MenuActions";
import ThemeProvider from "components/ThemeProvider";

import ProfileView from "views/ProfileView";

import { userStore } from "store/UserStore";

import { pageWrapperStyles } from "themes/common.css";

function ProfilePage() {
  if (!userStore.user) return <Navigate to="/login" replace />;

  return (
    <ThemeProvider>
      <Background />
      <MenuActions />
      <div className={pageWrapperStyles}>
        <ProfileView />
      </div>
    </ThemeProvider>
  );
}

export default observer(ProfilePage);
