import Image from "next/image";
import React, { FC } from "react";

import styles from "./sidebarWorkspace.module.css";

interface SidebarWorkspaceProps {
    name: string
};

const SidebarWorkspace: FC<SidebarWorkspaceProps> = ({ name }: SidebarWorkspaceProps) => {
    return <div className={styles.sidebarWorkspace}>
        <p className={styles.sidebarWorkspace__title}>{ name }</p>
        <span className={styles.sidebarWorkspace__menuBtn}>
            <Image
                src={"icons/menu.svg"}
                alt={"menu"}
                width={16}
                height={2}
            />
        </span>
    </div>
};

export default SidebarWorkspace;