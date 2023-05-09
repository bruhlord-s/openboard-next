import { FC } from "react";

import styles from "./profileToolbar.module.css";
import Image from "next/image";

interface ProfileToolbarProps {
  setIsParentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileToolbar: FC<ProfileToolbarProps> = ({
  setIsParentModalOpen,
  setIsEditModalOpen,
}) => {
  return (
    <div className={styles.profileToolbar}>
      <div
        className={styles.profileToolbar__option}
        onClick={() => {
          setIsParentModalOpen(false);
          setIsEditModalOpen(true);
        }}
      >
        <Image
          width={20}
          height={20}
          src="/icons/material_edit.svg"
          alt="edit"
        />
      </div>
    </div>
  );
};

export default ProfileToolbar;
