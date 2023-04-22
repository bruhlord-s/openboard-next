import Group from "@/types/Group";
import React, { FC, useState } from "react";
import SidebarGroupTitle from "../group-title/SidebarGroupTitle";
import SidebarWorkspace from "../workspace/SidebarWorkspace";

import styles from "./sidebarGroup.module.css";
import EditGroupPopup from "@/popups/edit-group/EditGroupPopup";
import DeleteGroupPopup from "@/popups/delete-group/DeleteGroupPopup";

interface SidebarGroupProps {
  group: Group;
}

const SidebarGroup: FC<SidebarGroupProps> = ({ group }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.sidebarGroup}>
      <SidebarGroupTitle
        group={group}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
      />
      {isOpen && (
        <div className={styles.sidebarGroup__workspaces}>
          <SidebarWorkspace name="openboard" />
          <SidebarWorkspace name="another project" />
        </div>
      )}

      <EditGroupPopup
        open={isEditModalOpen}
        setOpen={setIsEditModalOpen}
        group={group}
      />
      <DeleteGroupPopup
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
        group={group}
      />
    </div>
  );
};

export default SidebarGroup;
