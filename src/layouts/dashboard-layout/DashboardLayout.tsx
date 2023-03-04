import Sidebar from "@/components/sidebar/Sidebar";
import useAxios from "@/hooks/useAxios";
import React, { FC, useEffect, useState } from "react";
import User from "@/types/User";

import styles from "./dashboardLayout.module.css";
import SidebarSkeleton from "@/components/sidebar/skeleton/SidebarSkeleton";

// TODO: replace it with smth better
const emptyUser: User = {
  id: 0,
  name: "",
  email: "",
  groups: [],
  created_at: "",
  updated_at: "",
};

interface DashboardLayoutProps {
  children: JSX.Element | string;
}

// TODO: add sweep animation for skeleton
const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  const [user, setUser] = useState<User>(emptyUser);

  const axios = useAxios();

  const fetchUserData = () => {
    axios.get("/user").then((res) => setUser(res.data.data));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={styles.dashboardLayout}>
      {user.id === 0 ? (
        <SidebarSkeleton />
      ) : (
        <Sidebar user={user} updateUserData={fetchUserData} />
      )}
      <div className={styles.dashboardLayout__contentWrapper}>
        <main className={styles.dashboardLayout__content}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
