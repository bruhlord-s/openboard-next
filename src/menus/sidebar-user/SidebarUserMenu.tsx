import { useRouter } from "next/router";
import React, { FC } from "react";
import BaseMenu from "../BaseMenu";
import MenuItem from "../item/MenuItem";
import { MenuProps } from "../types/MenuProps";

import styles from "./sidebarUserMenu.module.css";

const SidebarUserMenu: FC<MenuProps> = ({ trigger, position }: MenuProps) => {
  const router = useRouter();

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      router.push("/login");
    }
  };

  return (
    <BaseMenu trigger={trigger} position={position}>
      <div className={styles.menu__items}>
        <MenuItem iconSrc="/icons/logout.svg" title="Logout" onClick={logout} />
      </div>
    </BaseMenu>
  );
};

export default SidebarUserMenu;
