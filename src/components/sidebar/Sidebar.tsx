import React, { FC } from "react";
import Logo from "../logo/Logo";

import styles from "./sidebar.module.css";
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
    </aside>
  );
};

export default Sidebar;
