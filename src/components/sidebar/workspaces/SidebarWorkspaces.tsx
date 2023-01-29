import React, { FC } from "react";
import SidebarGroup from "../group/SidebarGroup";

import styles from "./sidebarWorkspaces.module.css";

const SidebarWorkspaces: FC = () => {
  return (
    <div className={styles.sidebarWorkspaces}>
      <h3 className={styles.sidebarWorkspaces__title}>Your workspaces</h3>
      <div className={styles.sidebarWorkspaces__groups}>
        <SidebarGroup />
        
      </div>
    </div>
  );
};

export default SidebarWorkspaces;
