import React from "react";
import { observer } from "mobx-react-lite";

import TextField from "primitivies/TextField";

import { userStore } from "store/UserStore";

import {
  infoContainerStyles,
  avatarSectionStyles,
  userImgStyles,
  changePhotoButtonStyles,
  userInfoStyles,
  userNameStyles,
  editButtonStyles,
  editFormStyles,
  editActionsStyles,
  saveButtonStyles,
  cancelButtonStyles,
  logoutButtonStyles,
  headerActionsStyles,
  containerStyles,
} from "./styles.css";

function ProfileHeader() {
  const { user, updateProfile, logoutUser } = userStore;

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("");
  const [avatarPreview, setAvatarPreview] = React.useState("");

  const currentImgSrc = React.useMemo(
    () => avatarPreview || user?.imgSrc || "files/user.png",
    [avatarPreview, user?.imgSrc],
  );

  const handleEditClick = () => {
    if (isEditing) return handleCancel();
    setName(user?.name ?? "");
    setAvatarPreview("");
    setIsEditing(true);
  };

  const handleCancel = React.useCallback(() => {
    setAvatarPreview("");
    setIsEditing(false);
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    await updateProfile(name.trim(), avatarPreview || user?.imgSrc || "");
    setIsEditing(false);
  };

  return (
    <div className={containerStyles}>
      <div className={headerActionsStyles}>
        <button className={editButtonStyles} onClick={handleEditClick}>
          ✎ {isEditing ? "" : "Edit"}
        </button>
        <button className={logoutButtonStyles} onClick={logoutUser}>
          Log out
        </button>
      </div>
      <div className={infoContainerStyles}>
        <div className={avatarSectionStyles}>
          <img className={userImgStyles} src={currentImgSrc} alt="userPhoto" />
          {isEditing && (
            <>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} hidden />
              <button className={changePhotoButtonStyles} onClick={() => fileInputRef.current?.click()}>
                Change photo
              </button>
            </>
          )}
        </div>
        {user && (
          <div className={userInfoStyles}>
            {isEditing ? (
              <div className={editFormStyles}>
                Name
                <TextField value={name} onChange={setName} placeholder="Name" />
                <div className={editActionsStyles}>
                  <button className={saveButtonStyles} onClick={handleSave}>
                    Save
                  </button>
                  <button className={cancelButtonStyles} onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>{user.name && <div className={userNameStyles}>{user.name}</div>}</>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(ProfileHeader);
