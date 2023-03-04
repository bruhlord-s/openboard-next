import Button from "@/components/button/Button";
import CreateGroupPopup from "@/popups/create-group/CreateGroupPopup";
import Group from "@/types/Group";
import React, { FC, useState } from "react";
import SidebarGroup from "../group/SidebarGroup";

import styles from "./sidebarWorkspaces.module.css";

interface SidebarWorkspacesProps {
  groups: Group[];
  updateUserData: () => any;
}

const SidebarWorkspaces: FC<SidebarWorkspacesProps> = ({
  groups,
  updateUserData,
}: SidebarWorkspacesProps) => {
  const [isCreateGroupPopupOpen, setIsCreateGroupPopupOpen] =
    useState<boolean>(false);

  const openCreateGroupPopup = () => {
    setIsCreateGroupPopupOpen(true);
  };

  return (
    <div className={styles.sidebarWorkspaces}>
      <h3 className={styles.sidebarWorkspaces__title}>Your workspaces</h3>
      {groups.length < 1 && (
        <p className={styles.sidebarWorkspaces__emptyMessage}>
          You have no groups
        </p>
      )}
      <div className={styles.sidebarWorkspaces__groups}>
        {groups.map((group, i) => (
          <SidebarGroup group={group} key={i} />
        ))}
      </div>
      <div className={styles.sidebarWorkspaces__addGroup}>
        <Button
          title="Create new group"
          style={{ width: 200 }}
          onClick={openCreateGroupPopup}
        />
      </div>

      <CreateGroupPopup
        open={isCreateGroupPopupOpen}
        setOpen={setIsCreateGroupPopupOpen}
        updateUserData={updateUserData}
      />
    </div>
  );
};

export default SidebarWorkspaces;
