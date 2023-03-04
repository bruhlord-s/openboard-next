import Avatar from "@/components/avatar/Avatar";
import React, { FC } from "react";

import styles from "./sidebarUser.module.css";

interface SidebarUserProps {
  name: string;
  email: string;
}

const SidebarUser: FC<SidebarUserProps> = ({
  name,
  email,
}: SidebarUserProps) => {
  return (
    <div className={styles.sidebarUser}>
      <div className={styles.sidebarUser__avatar}>
        <Avatar width={50} height={50} src={"/images/avatar.png"} />
      </div>
      <div className={styles.sidebarUser__info}>
        <p className={styles.sidebarUser__name}>{name}</p>
        <p className={styles.sidebarUser__email}>{email}</p>
      </div>
    </div>
  );
};

export default SidebarUser;
