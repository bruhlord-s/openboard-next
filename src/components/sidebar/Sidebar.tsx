import SidebarUserMenu from "@/menus/sidebar-user/SidebarUserMenu";
import User from "@/types/User";
import React, { FC, useState } from "react";
import Logo from "../logo/Logo";

import styles from "./sidebar.module.css";
import SidebarUser from "./user/SidebarUser";
import SidebarWorkspaces from "./workspaces/SidebarWorkspaces";

interface SidebarProps {
  user: User;
}

const Sidebar: FC<SidebarProps> = ({ user }: SidebarProps) => {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState<boolean>(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState<boolean>(false);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Logo />
      </div>
      <div className={styles.sidebar__workspaces}>
        <SidebarWorkspaces groups={user.groups} />
      </div>
      <SidebarUserMenu
        setIsProfilePopupOpen={setIsProfilePopupOpen}
        trigger={
          <div className={styles.sidebar__user}>
            <SidebarUser
              user={user}
              isProfilePopupOpen={isProfilePopupOpen}
              setIsProfilePopupOpen={setIsProfilePopupOpen}
              isEditProfilePopupOpen={isEditProfilePopupOpen}
              setIsEditProfilePopupOpen={setIsEditProfilePopupOpen}
            />
          </div>
        }
        position="right bottom"
      />
    </aside>
  );
};

export default Sidebar;
