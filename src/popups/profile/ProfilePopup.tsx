import React, { FC } from "react";

import styles from "./profilePopup.module.css";
import BasePopup from "../BasePopup";
import User from "@/types/User";
import PopupProps from "../types/PopupProps";
import Avatar from "@/components/avatar/Avatar";
import ProfileToolbar from "@/components/profile-toolbar/ProfileToolbar";

interface ProfilePopupProps extends PopupProps {
  user: User;
  setIsEditProfilePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilePopup: FC<ProfilePopupProps> = ({
  open,
  setOpen,
  user,
  setIsEditProfilePopupOpen,
}) => {
  return (
    <BasePopup
      open={open}
      setOpen={setOpen}
      title="Профиль"
      toolbar={
        <ProfileToolbar
          setIsEditModalOpen={setIsEditProfilePopupOpen}
          setIsParentModalOpen={setOpen}
        />
      }
    >
      <div className={styles.profilePopup}>
        <div className={styles.profilePopup__avatar}>
          <Avatar width={100} height={100} src={user.avatar} />
        </div>
        <div className={styles.profilePopup__userData}>
          <div className={styles.profilePopup__block}>
            <p className={styles.profilePopup__name}>Имя</p>
            <p className={styles.profilePopup__value}>{user.name}</p>
          </div>
          <div className={styles.profilePopup__block}>
            <p className={styles.profilePopup__name}>Email</p>
            <p className={styles.profilePopup__value}>{user.email}</p>
          </div>
        </div>
      </div>
    </BasePopup>
  );
};

export default ProfilePopup;
