import { FC, useContext, useState } from "react";
import PopupProps from "../types/PopupProps";
import BasePopup from "../BasePopup";

import styles from "./deleteTaskPopup.module.css";
import Button from "@/components/button/Button";
import useAxios from "@/hooks/useAxios";
import Task from "@/types/Task";
import { UpdateWorkspaceContext } from "@/components/dashboard/Dashboard";

export interface DeleteTaskPopupProps extends PopupProps {
  task: Task;
}

const DeleteTaskPopup: FC<DeleteTaskPopupProps> = ({
  open,
  setOpen,
  task,
}: DeleteTaskPopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(UpdateWorkspaceContext);

  const deleteTask = () => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .delete(`task/${task.id}`)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Удалить задачу?">
      <div className={styles.deletePopup}>
        <p className={styles.deletePopup__message}>
          Вы уверены что хотите удалить {task.name}?
        </p>
        <div className={styles.deletePopup__options}>
          <Button
            title="Удалить"
            style={{ width: 100 }}
            type="submit"
            disabled={isLoading}
            onClick={() => deleteTask()}
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

export default DeleteTaskPopup;
