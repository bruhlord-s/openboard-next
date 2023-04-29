import Button from "@/components/button/Button";
import React, { FC } from "react";

import styles from "./dashboardHeader.module.css";
import Workspace from "@/types/Workspace";

interface DashboardHeaderProps {
  workspace: Workspace;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({
  workspace,
}: DashboardHeaderProps) => {
  return (
    <header className={styles.dashboardHeader}>
      <h2 className={styles.dashboardHeader__title}>{workspace.name}</h2>
      <div className={styles.dashboardHeader__actions}>
        <Button title="New task" />
        <Button title="New board" />
      </div>
    </header>
  );
};

export default DashboardHeader;
