import useAxios from "@/hooks/useAxios";
import React, { FC, useEffect } from "react";
import DashboardBoards from "./boards/DashboardBoards";

import styles from "./dashboard.module.css";
import DashboardHeader from "./header/DashboardHeader";

const Dashboard: FC = () => {
  const axios = useAxios();

  useEffect(() => {
    axios.get("/user");
  }, [axios]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__header}>
        <DashboardHeader />
      </div>
      <div className={styles.dashboard__boards}>
        <DashboardBoards />
      </div>
    </div>
  );
};

export default Dashboard;
