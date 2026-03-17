import React from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import MenuActions from "components/MenuActions";
import ThemeProvider from "components/ThemeProvider";
import Background from "components/Background";

import CreateUserView from "views/CreateUserView";

import { userStore } from "store/UserStore";

import { pageWrapperStyles } from "themes/common.css";

function CreateUserPage() {
  if (userStore.user) return <Navigate to="/profile" replace />;

  return (
    <ThemeProvider>
      <MenuActions />
      <Background />
      <div className={pageWrapperStyles}>
        <CreateUserView />
      </div>
    </ThemeProvider>
  );
}

export default observer(CreateUserPage);
