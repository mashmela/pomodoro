import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Button from "primitivies/Button";
import TextField from "primitivies/TextField";

import { userStore } from "store/UserStore";

import { useAsyncFn } from "hooks/useAsyncFn";

import {
  inputContainerStyles,
  inputsContainerStyles,
  toggleLinkStyles,
  errorTextStyles,
  pageContainerStyles,
} from "./styles.css";

function CreateUserView() {
  const { createUser } = userStore;

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError] = React.useState("");
  const [passwordError] = React.useState("");

  const handleButtonClick = React.useCallback(async () => {
    await createUser(email, password, name);
  }, [createUser, email, name, password]);

  const [loading, asyncCreateUser] = useAsyncFn(handleButtonClick);

  return (
    <div className={pageContainerStyles}>
      <div className={inputsContainerStyles}>
        <div className={inputContainerStyles}>
          Email
          <TextField placeholder="email@example.com" value={email} onChange={setEmail} />
          {emailError && <span className={errorTextStyles}>{emailError}</span>}
        </div>
        <div className={inputContainerStyles}>
          Name
          <TextField placeholder="Name" value={name} onChange={setName} />
        </div>
        <div className={inputContainerStyles}>
          Password
          <TextField placeholder="Password" value={password} onChange={setPassword} type="password" />
          {passwordError && <span className={errorTextStyles}>{passwordError}</span>}
        </div>
        <Link className={toggleLinkStyles} to="/login">
          I have an account
        </Link>
        <Button name="Create user" onClick={asyncCreateUser} disabled={loading} />
      </div>
    </div>
  );
}

export default observer(CreateUserView);
