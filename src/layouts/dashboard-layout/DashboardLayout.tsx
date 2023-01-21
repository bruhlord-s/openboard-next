import Sidebar from "@/components/sidebar/Sidebar";
import React, { FC } from "react";

import styles from "./dashboardLayout.module.css";

interface DashboardLayoutProps {
  children: JSX.Element | string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.dashboardLayout__content}>{children}</main>
    </div>
  );
};

export default DashboardLayout;
