import Logo from "@/components/logo/Logo";
import SkeletonCircle from "@/components/skeleton/circle/SkeletonCircle";
import SkeletonRectangle from "@/components/skeleton/rectangle/SkeletonRectangle";
import React, { FC } from "react";

import styles from "./sidebarSkeleton.module.css";

const SidebarSkeleton: FC = () => {
  return (
    <aside className={styles.sidebarSkeleton}>
      <div className={styles.sidebarSkeleton__logo}>
        <Logo />
      </div>
      <div className={styles.sidebarSkeleton__workspaces}>
        <div className={styles.sidebarSkeleton__group}>
          <SkeletonRectangle style={{ width: 200, height: 16 }} />
          <SkeletonRectangle style={{ width: 170, height: 16 }} />
          <SkeletonRectangle style={{ width: 170, height: 16 }} />
        </div>
        <div className={styles.sidebarSkeleton__group}>
          <SkeletonRectangle style={{ width: 200, height: 16 }} />
        </div>
        <div className={styles.sidebarSkeleton__group}>
          <SkeletonRectangle style={{ width: 200, height: 16 }} />
        </div>
      </div>
      <div className={styles.sidebarSkeleton__user}>
        <div className={styles.sidebarSkeleton__avatar}>
          <SkeletonCircle style={{ width: 64, height: 64 }} />
        </div>
        <div className={styles.sidebarSkeleton__userData}>
          <SkeletonRectangle style={{ width: 120, height: 16 }} />
          <SkeletonRectangle style={{ width: 140, height: 14 }} />
        </div>
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
