import { FC, useContext, useState } from "react";
import PopupProps from "../types/PopupProps";
import BasePopup from "../BasePopup";

import styles from "./deleteGroupPopup.module.css";
import Group from "@/types/Group";
import Button from "@/components/button/Button";
import useAxios from "@/hooks/useAxios";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";

export interface DeleteGroupPopupProps extends PopupProps {
  group: Group;
}

const DeleteGroupPopup: FC<DeleteGroupPopupProps> = ({
  open,
  setOpen,
  group,
}: DeleteGroupPopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const deleteGroup = () => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .delete(`group/${group.id}`)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Удалить группу?">
      <div className={styles.deletePopup}>
        <p className={styles.deletePopup__message}>
          Вы уверены что хотите удалить {group.name}?
        </p>
        <div className={styles.deletePopup__options}>
          <Button
            title="Удалить"
            style={{ width: 100 }}
            type="submit"
            disabled={isLoading}
            onClick={() => deleteGroup()}
          />
          <Button
            title="Отмена"
            style={{
              width: 100,
              backgroundColor: "#fff",
              border: "1px solid #000",
              color: "#000",
            }}
            type="submit"
            disabled={isLoading}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </BasePopup>
  );
};

export default DeleteGroupPopup;
