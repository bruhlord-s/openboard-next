import Group from "@/types/Group";
import React, { FC, useState } from "react";
import SidebarGroupTitle from "../group-title/SidebarGroupTitle";
import SidebarWorkspace from "../workspace/SidebarWorkspace";

import styles from "./sidebarGroup.module.css";
import EditGroupPopup from "@/popups/edit-group/EditGroupPopup";
import DeleteGroupPopup from "@/popups/delete-group/DeleteGroupPopup";
import CreateWorkspacePopup from "@/popups/create-workspace/CreateWorkspacePopup";
import InviteGroupPopup from "@/popups/invite-group/InviteGroupPopup";

interface SidebarGroupProps {
  group: Group;
}

const SidebarGroup: FC<SidebarGroupProps> = ({ group }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isCreteModalOpen, setIsCreateModalOpen] = useState<boolean>(false); // modal to create workspace

  return (
    <div className={styles.sidebarGroup}>
      <SidebarGroupTitle
        group={group}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setIsInviteGroupOpen={setIsInviteModalOpen}
      />
      {isOpen &&
        group.workspaces.map((workspace, index) => (
          <SidebarWorkspace workspace={workspace} key={index} />
        ))}
      {
        // if group has no workspaces
        isOpen && group.workspaces.length < 1 && (
          <p className={styles.sidebarGroup__noWorkspaces}>
            В этой группе нет проектов =/
          </p>
        )
      }

      <CreateWorkspacePopup
        open={isCreteModalOpen}
        setOpen={setIsCreateModalOpen}
        groupId={group.id}
      />
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
      <InviteGroupPopup
        open={isInviteModalOpen}
        setOpen={setIsInviteModalOpen}
        group={group}
      />
    </div>
  );
};

export default SidebarGroup;
