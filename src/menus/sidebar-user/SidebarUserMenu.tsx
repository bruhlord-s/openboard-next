import { useRouter } from "next/router";
import React, { FC } from "react";
import BaseMenu from "../BaseMenu";
import MenuItem from "../item/MenuItem";
import { MenuProps } from "../types/MenuProps";

import styles from "./sidebarUserMenu.module.css";

interface SidebarUserMenuProps extends MenuProps {
  setIsProfilePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarUserMenu: FC<SidebarUserMenuProps> = ({
  trigger,
  position,
  setIsProfilePopupOpen,
}: SidebarUserMenuProps) => {
  const router = useRouter();

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      router.push("/login");
    }
  };

  const openModalWithPreclick = (
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const mouseClickEvents = ["mousedown", "click", "mouseup"];
    mouseClickEvents.forEach((mouseEventType) =>
      document.querySelector("body")!.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        })
      )
    );
    setModalOpen(true);
  };

  return (
    <BaseMenu trigger={trigger} position={position}>
      <div className={styles.menu__items}>
        <MenuItem
          iconSrc="/icons/material-person.svg"
          title="Профиль"
          onClick={() => openModalWithPreclick(setIsProfilePopupOpen)}
        />
        <MenuItem
          iconSrc="/icons/material-logout.svg"
          title="Выйти"
          onClick={logout}
          warning={true}
        />
      </div>
    </BaseMenu>
  );
};

export default SidebarUserMenu;
