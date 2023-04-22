import React, { FC, useRef } from "react";
import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";

import styles from "./baseMenu.module.css";

const BaseMenu: FC<PopupProps> = ({ trigger, children, position, onClose }) => {
  return (
    <Popup
      trigger={trigger}
      position={position}
      arrow={false}
      onClose={onClose}
    >
      <div className={styles.menu}>{children}</div>
    </Popup>
  );
};

export default BaseMenu;
