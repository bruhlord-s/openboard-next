import SidebarGroupMenu from "@/menus/sidebar-group/SidebarGroupMenu";
import Group from "@/types/Group";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./sidebarGroupTitle.module.css";

interface SidebarGroupTitleProps {
  group: Group;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarGroupTitle: FC<SidebarGroupTitleProps> = ({
  group,
  isOpen,
  setIsOpen,
  setIsCreateModalOpen,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
}: SidebarGroupTitleProps) => {
  return (
    <div className={styles.sidebarGroupTitle}>
      <div
        className={styles.sidebarGroupTitle__toggler}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={styles.sidebarGroupTitle__title}>{group.name}</p>
        <Image
          style={isOpen ? {} : { transform: "rotate(-90deg)" }}
          src={"icons/sidebar-group-open.svg"}
          alt="open"
          width={12}
          height={6}
        />
      </div>
      <div className={styles.sidebarGroupTitle__btns}>
        <div
          className={styles.sidebarGroupTitle__createBtn}
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Image src={"icons/create.svg"} alt="create" width={12} height={12} />
        </div>
        <SidebarGroupMenu
          trigger={
            <div className={styles.sidebarGroupTitle__menuBtn}>
              <Image src={"icons/menu.svg"} alt="menu" width={16} height={4} />
            </div>
          }
          position="right center"
          group={group}
          setIsEditModalOpen={setIsEditModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      </div>
    </div>
  );
};

export default SidebarGroupTitle;
