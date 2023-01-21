import React, { FC, useState } from "react";
import SidebarGroupTitle from "../group-title/SidebarGroupTitle";

import styles from "./sidebarGroup.module.css";

const SidebarGroup: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.sidebarGroup}>
      <SidebarGroupTitle
        title="xaxaweb"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default SidebarGroup;
