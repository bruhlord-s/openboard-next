import Avatar from "@/components/avatar/Avatar";
import React, { FC } from "react";

import styles from "./sidebarUser.module.css";

const SidebarUser: FC = () => {
  return (
    <div className={styles.sidebarUser}>
      <div className={styles.sidebarUser__avatar}>
        <Avatar width={50} height={50} src={"/images/avatar.png"} />
      </div>
      <div className={styles.sidebarUser__info}>
        <p className={styles.sidebarUser__name}>John Doe</p>
        <p className={styles.sidebarUser__email}>johndoe@gmail.com</p>
      </div>
    </div>
  );
};

export default SidebarUser;
