import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Button from "primitivies/Button";
import TextField from "primitivies/TextField";

import { userStore } from "store/UserStore";

import {
  inputContainerStyles,
  inputsContainerStyles,
  toggleLinkStyles,
  errorTextStyles,
  pageContainerStyles,
} from "./styles.css";

function LoginView() {
  const navigate = useNavigate();
  const { loginUser } = userStore;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError] = React.useState("");
  const [passwordError] = React.useState("");

  const handleButtonClick = React.useCallback(async () => {
    await loginUser(email, password);
    navigate("/profile");
  }, [email, loginUser, navigate, password]);

  return (
    <div className={pageContainerStyles}>
      <div className={inputsContainerStyles}>
        <div className={inputContainerStyles}>
          Email
          <TextField value={email} onChange={setEmail} placeholder="email@example.com" />
          {emailError && <span className={errorTextStyles}>{emailError}</span>}
        </div>
        <div className={inputContainerStyles}>
          Password
          <TextField value={password} onChange={setPassword} type="password" placeholder="Password" />
          {passwordError && <span className={errorTextStyles}>{passwordError}</span>}
        </div>
        <Link className={toggleLinkStyles} to="/create-user">
          I don't have an account
        </Link>
        <Button name="Log in" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default observer(LoginView);
