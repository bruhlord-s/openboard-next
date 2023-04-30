import Button from "@/components/button/Button";
import React, { FC, useState } from "react";

import styles from "./dashboardHeader.module.css";
import Workspace from "@/types/Workspace";
import CreateBoardPopup from "@/popups/create-board/CreateBoardPopup";

interface DashboardHeaderProps {
  workspace: Workspace;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({
  workspace,
}: DashboardHeaderProps) => {
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] =
    useState<boolean>(false);

  return (
    <header className={styles.dashboardHeader}>
      <h2 className={styles.dashboardHeader__title}>{workspace.name}</h2>
      <div className={styles.dashboardHeader__actions}>
        <Button title="New task" />
        <Button
          title="New board"
          onClick={() => setIsCreateBoardModalOpen(true)}
        />
      </div>

      <CreateBoardPopup
        open={isCreateBoardModalOpen}
        setOpen={setIsCreateBoardModalOpen}
        workspaceId={workspace.id}
      />
    </header>
  );
};

export default DashboardHeader;
