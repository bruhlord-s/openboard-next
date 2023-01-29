import Image from "next/image";
import React, { FC } from "react";

import styles from "./sidebarGroupTitle.module.css";

interface SidebarGroupTitleProps {
  title: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarGroupTitle: FC<SidebarGroupTitleProps> = ({
  title,
  isOpen,
  setIsOpen,
}: SidebarGroupTitleProps) => {
  return (
    <div
      className={styles.sidebarGroupTitle}
    >
      <div  
        className={styles.sidebarGroupTitle__toggler}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={styles.sidebarGroupTitle__title}>{title}</p>
        <Image
          style={isOpen ? {} : {transform: 'rotate(-90deg)'}}
          src={"icons/sidebar-group-open.svg"}
          alt="open"
          width={12}
          height={6}
        />
      </div>
      <div className={styles.sidebarGroupTitle__menuBtn}>
        <Image
          src={"icons/menu.svg"}
          alt="menu"
          width={16}
          height={2}
        />
      </div>
    </div>
  );
};

export default SidebarGroupTitle;
