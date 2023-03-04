import Group from "@/types/Group";
import React, { FC, useState } from "react";
import SidebarGroupTitle from "../group-title/SidebarGroupTitle";
import SidebarWorkspace from "../workspace/SidebarWorkspace";

import styles from "./sidebarGroup.module.css";

interface SidebarGroupProps {
  group: Group;
}

const SidebarGroup: FC<SidebarGroupProps> = ({ group }: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.sidebarGroup}>
      <SidebarGroupTitle
        title={group.name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <div className={styles.sidebarGroup__workspaces}>
          <SidebarWorkspace name="openboard" />
          <SidebarWorkspace name="another project" />
        </div>
      )}
    </div>
  );
};

export default SidebarGroup;
