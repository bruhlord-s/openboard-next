import User from "@/types/User";
import React, { FC } from "react";
import Logo from "../logo/Logo";

import styles from "./sidebar.module.css";
import SidebarUser from "./user/SidebarUser";
import SidebarWorkspaces from "./workspaces/SidebarWorkspaces";

interface SidebarProps {
  user: User;
  updateUserData: () => any;
}

const Sidebar: FC<SidebarProps> = ({ user, updateUserData }: SidebarProps) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Logo />
      </div>
      <div className={styles.sidebar__workspaces}>
        <SidebarWorkspaces
          groups={user.groups}
          updateUserData={updateUserData}
        />
      </div>
      <div className={styles.sidebar__user}>
        <SidebarUser name={user.name} email={user.email} />
      </div>
    </aside>
  );
};

export default Sidebar;
