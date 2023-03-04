import { FC } from "react";
import Popup from "reactjs-popup";
import PopupProps from "./types/PopupProps";

import styles from "./basePopup.module.css";

interface BasePopupProps extends PopupProps {
  children: JSX.Element;
  title: string;
}

const BasePopup: FC<BasePopupProps> = ({
  children,
  open,
  setOpen,
  title,
}: BasePopupProps) => {
  const closePopup = () => {
    setOpen(false);
  };

  return (
    <Popup className={"popup"} open={open} onClose={closePopup}>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <h2 className={styles.popup__title}>{title}</h2>
        </div>
        <div className={styles.popup__body}>{children}</div>
      </div>
    </Popup>
  );
};

export default BasePopup;
