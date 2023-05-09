import Avatar from "@/components/avatar/Avatar";
import React, { FC, useState } from "react";

import styles from "./sidebarUser.module.css";
import { userAgent } from "next/server";
import ProfilePopup from "@/popups/profile/ProfilePopup";
import User from "@/types/User";
import EditProfilePopup from "@/popups/edit-profile/EditProfile";

interface SidebarUserProps {
  isProfilePopupOpen: boolean;
  setIsProfilePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditProfilePopupOpen: boolean;
  setIsEditProfilePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}

const SidebarUser: FC<SidebarUserProps> = ({
  user,
  isProfilePopupOpen,
  setIsProfilePopupOpen,
  isEditProfilePopupOpen,
  setIsEditProfilePopupOpen,
}: SidebarUserProps) => {
  return (
    <div className={styles.sidebarUser}>
      <div className={styles.sidebarUser__avatar}>
        <Avatar width={50} height={50} src={user.avatar} />
      </div>
      <div className={styles.sidebarUser__info}>
        <p className={styles.sidebarUser__name}>{user.name}</p>
        <p className={styles.sidebarUser__email}>{user.email}</p>
      </div>

      <ProfilePopup
        open={isProfilePopupOpen}
        setOpen={setIsProfilePopupOpen}
        user={user}
        setIsEditProfilePopupOpen={setIsEditProfilePopupOpen}
      />
      <EditProfilePopup
        open={isEditProfilePopupOpen}
        setOpen={setIsEditProfilePopupOpen}
        user={user}
      />
    </div>
  );
};

export default SidebarUser;
