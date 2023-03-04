import React, { CSSProperties, FC } from "react";

import styles from "./skeletonCircle.module.css";

interface SkeletonCircleProps {
  style: CSSProperties;
}

const SkeletonCircle: FC<SkeletonCircleProps> = ({
  style,
}: SkeletonCircleProps) => {
  return <div className={styles.skeletonCircle} style={style}></div>;
};

export default SkeletonCircle;
