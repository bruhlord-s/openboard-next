import Image from "next/image";
import React, { FC } from "react";

import styles from "./menuItem.module.css";

interface MenuItemProps {
  iconSrc: string;
  title: string;
  warning?: boolean;
  onClick: () => any;
}

const MenuItem: FC<MenuItemProps> = ({
  iconSrc,
  title,
  warning,
  onClick,
}: MenuItemProps) => {
  return (
    <div className={styles.menuItem} onClick={onClick}>
      <div className={styles.menuItem__icon}>
        <Image width={24} height={24} alt={title} src={iconSrc} />
      </div>
      <p
        className={
          warning ? styles.menuItem__title : styles.menuItem__title_warning
        }
      >
        {title}
      </p>
    </div>
  );
};

export default MenuItem;
