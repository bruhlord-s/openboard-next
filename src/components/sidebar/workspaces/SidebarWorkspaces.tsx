import Button from "@/components/button/Button";
import CreateGroupPopup from "@/popups/create-group/CreateGroupPopup";
import React, { FC, useState } from "react";
import SidebarGroup from "../group/SidebarGroup";

import styles from "./sidebarWorkspaces.module.css";

const SidebarWorkspaces: FC = () => {
  const [isCreateGroupPopupOpen, setIsCreateGroupPopupOpen] = useState<boolean>(false);

  const openCreateGroupPopup = () => {
    setIsCreateGroupPopupOpen(true);
  };

  return (
    <div className={styles.sidebarWorkspaces}>
      <h3 className={styles.sidebarWorkspaces__title}>Your workspaces</h3>
      <div className={styles.sidebarWorkspaces__groups}>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroup />
      </div>
      <div className={styles.sidebarWorkspaces__addGroup}>
        <Button title="Create new group" style={{ width: 200 }} onClick={openCreateGroupPopup} />
      </div>

      <CreateGroupPopup open={isCreateGroupPopupOpen} setOpen={setIsCreateGroupPopupOpen} />
    </div>
  );
};

export default SidebarWorkspaces;
