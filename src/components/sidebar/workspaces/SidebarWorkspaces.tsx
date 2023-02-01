import Button from "@/components/button/Button";
import React, { FC } from "react";
import SidebarGroup from "../group/SidebarGroup";

import styles from "./sidebarWorkspaces.module.css";

const SidebarWorkspaces: FC = () => {
  return (
    <div className={styles.sidebarWorkspaces}>
      <h3 className={styles.sidebarWorkspaces__title}>Your workspaces</h3>
      <div className={styles.sidebarWorkspaces__groups}>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup />
      </div>
      <div className={styles.sidebarWorkspaces__addGroup}>
        <Button title="Create new group" style={{ width: 200 }} />
      </div>
    </div>
  );
};

export default SidebarWorkspaces;
