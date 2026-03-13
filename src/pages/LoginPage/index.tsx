import React from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import Background from "components/Background";
import MenuActions from "components/MenuActions";
import ThemeProvider from "components/ThemeProvider";

import LoginView from "views/LoginView";

import { userStore } from "store/UserStore";

import { pageWrapperStyles } from "themes/common.css";

function LoginForm() {
  if (userStore.user) return <Navigate to="/profile" replace />;

  return (
    <ThemeProvider>
      <MenuActions />
      <Background />
      <MenuActions />
      <div className={pageWrapperStyles}>
        <LoginView />
      </div>
    </ThemeProvider>
  );
}

export default observer(LoginForm);
