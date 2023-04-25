import Image from "next/image";
import React, { FC, useState } from "react";

import styles from "./sidebarWorkspace.module.css";
import SidebarWorkspaceMenu from "@/menus/sidebar-workspace/SidebarWorkspaceMenu";
import EditWorkspacePopup from "@/popups/edit-workspace/EditWorkspacePopup";
import Workspace from "@/types/Workspace";
import DeleteWorkspacePopup from "@/popups/delete-workspace/DeleteWorkspacePopup";

interface SidebarWorkspaceProps {
  workspace: Workspace;
}

const SidebarWorkspace: FC<SidebarWorkspaceProps> = ({
  workspace,
}: SidebarWorkspaceProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.sidebarWorkspace}>
      <p className={styles.sidebarWorkspace__title}>{workspace.name}</p>
      <SidebarWorkspaceMenu
        trigger={
          <span className={styles.sidebarWorkspace__menuBtn}>
            <Image src={"icons/menu.svg"} alt={"menu"} width={16} height={4} />
          </span>
        }
        setIsEditModalOpen={setIsEditModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
      />

      <EditWorkspacePopup
        workspace={workspace}
        open={isEditModalOpen}
        setOpen={setIsEditModalOpen}
      />
      <DeleteWorkspacePopup
        workspace={workspace}
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
      />
    </div>
  );
};

export default SidebarWorkspace;
