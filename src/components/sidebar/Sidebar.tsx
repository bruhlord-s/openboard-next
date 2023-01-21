import React, { FC } from "react";
import Logo from "../logo/Logo";

import styles from "./sidebar.module.css";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Logo />
      </div>
    </aside>
  );
};

export default Sidebar;
