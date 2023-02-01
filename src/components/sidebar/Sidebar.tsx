import React, { FC } from "react";
import Logo from "../logo/Logo";

import styles from "./sidebar.module.css";
import SidebarUser from "./user/SidebarUser";
import SidebarWorkspaces from "./workspaces/SidebarWorkspaces";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Logo />
      </div>
      <div className={styles.sidebar__workspaces}>
        <SidebarWorkspaces />
      </div>
      <div className={styles.sidebar__user}>
        <SidebarUser />
      </div>
    </aside>
  );
};

export default Sidebar;
