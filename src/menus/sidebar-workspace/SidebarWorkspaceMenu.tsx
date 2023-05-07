import React, { FC, useState } from "react";
import BaseMenu from "../BaseMenu";
import { MenuProps } from "../types/MenuProps";

import styles from "../baseMenu.module.css";
import MenuItem from "../item/MenuItem";
import Group from "@/types/Group";

interface SidebarWorkspaceMenuProps extends MenuProps {
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarWorkspaceMenu: FC<SidebarWorkspaceMenuProps> = ({
  trigger,
  position,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
}: SidebarWorkspaceMenuProps) => {
  // greatest trick i've ever used
  // auto closes this menu when you choose option from it
  // else this menu will be not closed that leads to unexcepted behavior =(
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
        {/* <MenuItem
          iconSrc="/icons/logout.svg"
          title="Invite"
          onClick={() => {}}
        /> */}
        <MenuItem
          iconSrc="/icons/edit.svg"
          title="Изменить"
          onClick={() => openModalWithPreclick(setIsEditModalOpen)}
        />
        <MenuItem
          iconSrc="/icons/trash.svg"
          title="Удалить"
          onClick={() => openModalWithPreclick(setIsDeleteModalOpen)}
          warning={true}
        />
      </div>
    </BaseMenu>
  );
};

export default SidebarWorkspaceMenu;
