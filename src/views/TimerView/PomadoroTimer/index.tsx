import React from "react";
import { observer } from "mobx-react-lite";

import { pomadoroStyles } from "./styles.css";

interface PomadoroInterface {
  fullfilled: boolean;
}

function PomadoroTimer({ fullfilled }: PomadoroInterface) {
  return <div className={pomadoroStyles({ fullfilled })} />;
}

export default observer(PomadoroTimer);
