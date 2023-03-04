import React, { CSSProperties, FC } from "react";

import styles from "./skeletonRectangle.module.css";

interface SkeletonRectangleProps {
  style: CSSProperties;
}

const SkeletonRectangle: FC<SkeletonRectangleProps> = ({
  style,
}: SkeletonRectangleProps) => {
  return <div className={styles.skeletonRectangle} style={style}></div>;
};

export default SkeletonRectangle;
