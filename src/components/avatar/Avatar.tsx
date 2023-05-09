import React, { FC } from "react";
import Image from "next/image";

import styles from "./avatar.module.css";

interface AvatarProps {
  width: number;
  height: number;
  src?: string;
}

const Avatar: FC<AvatarProps> = ({ width, height, src }: AvatarProps) => {
  return (
    <div
      className={styles.avatar}
      style={{ width: width, height: height, backgroundImage: `url(${src})` }}
    >
      {/* <img src={src ?? "/images/avatar.png"} alt={"avatar"} /> */}
    </div>
  );
};

export default Avatar;
