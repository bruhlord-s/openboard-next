import { FC, useContext, useState } from "react";
import PopupProps from "../types/PopupProps";
import BasePopup from "../BasePopup";

import styles from "./deleteWorkspacePopup.module.css";
import Button from "@/components/button/Button";
import useAxios from "@/hooks/useAxios";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";
import Workspace from "@/types/Workspace";
import { WorkspaceContext } from "@/pages";

export interface DeleteWorkspacePopupProps extends PopupProps {
  workspace: Workspace;
}

const DeleteWorkspacePopup: FC<DeleteWorkspacePopupProps> = ({
  open,
  setOpen,
  workspace,
}: DeleteWorkspacePopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);
  const setWorkspaceId = useContext(WorkspaceContext)!.setCurrentWorkspaceId;

  const deleteWorkspace = () => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .delete(`workspace/${workspace.id}`)
      .then(() => {
        setOpen(false);
        updateData();
        setWorkspaceId(null);
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Удалить проект?">
      <div className={styles.deletePopup}>
        <p className={styles.deletePopup__message}>
          Вы уверены что хотите удалить {workspace.name}?
        </p>
        <div className={styles.deletePopup__options}>
          <Button
            title="Удалить"
            style={{ width: 100 }}
            type="submit"
            disabled={isLoading}
            onClick={() => deleteWorkspace()}
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

export default DeleteWorkspacePopup;
