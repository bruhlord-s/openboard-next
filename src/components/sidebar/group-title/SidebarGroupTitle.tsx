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
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className={styles.sidebarGroupTitle__title}>{title}</p>
      <Image
        src={
          isOpen
            ? "icons/sidebar-group-open.svg"
            : "icons/sidebar-group-close.svg"
        }
        alt="open"
        width={isOpen ? 16 : 9}
        height={isOpen ? 8 : 18}
      />
    </div>
  );
};

export default SidebarGroupTitle;
