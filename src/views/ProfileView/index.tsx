import React from "react";
import { observer } from "mobx-react-lite";

import { userStore } from "store/UserStore";

import { calculateStats } from "utils/statsCalculator";

import Calendar from "./Calendar";
import StatsBlock from "./StatsBlock";
import ProfileHeader from "./ProfileHeader";

import { userContainerStyles } from "./styles.css";

function ProfileView() {
  const { user } = userStore;
  const history = user ? user.pomodoroHistory || {} : {};

  const stats = React.useMemo(() => calculateStats(user!.pomodoroHistory), [user]);

  return (
    <div className={userContainerStyles}>
      <ProfileHeader />
      <StatsBlock stats={stats} />
      <Calendar history={history} />
    </div>
  );
}

export default observer(ProfileView);
