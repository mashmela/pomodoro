import React from "react";
import { observer } from "mobx-react-lite";

import { userStore } from "store/UserStore";

import {
  loadingContainerStyles,
  spinnerStyles,
  messageStyles,
  offlineButtonStyles,
  offlineMessageStyles,
} from "./styles.css";

interface LoadingViewInterface {
  message?: string;
  showOfflineOption?: boolean;
}

function LoadingView({ message = "Loading...", showOfflineOption = true }: LoadingViewInterface) {
  const [showOfflineOptions, setShowOfflineOptions] = React.useState(false);

  const onSkip = React.useCallback(() => {
    userStore.setUserLoading(false);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfflineOptions(showOfflineOption);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showOfflineOption]);

  return (
    <div className={loadingContainerStyles}>
      <div className={spinnerStyles} />
      <p className={messageStyles}>{message}</p>

      {showOfflineOptions && (
        <>
          <button className={offlineButtonStyles} onClick={onSkip} type="button">
            Continue in offline mode
          </button>
          <p className={offlineMessageStyles}>
            ⚠️ Server is taking longer than expected to respond.
            <br />
            You can continue in offline mode and sync later.
          </p>
        </>
      )}
    </div>
  );
}

export default observer(LoadingView);
