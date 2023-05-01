import React, { FC } from "react";
import Image from "next/image";

import styles from "./avatar.module.css";

interface AvatarProps {
  width: number;
  height: number;
  src: string;
}

const Avatar: FC<AvatarProps> = ({ width, height, src }: AvatarProps) => {
  return (
    <div className={styles.avatar} style={{ height: height }}>
      <Image width={width} height={height} src={src} alt={"avatar"} />
    </div>
  );
};

export default Avatar;
