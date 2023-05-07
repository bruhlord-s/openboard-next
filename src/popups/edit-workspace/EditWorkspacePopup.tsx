import useAxios from "@/hooks/useAxios";
import React, { FC, useContext, useState } from "react";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";

import styles from "../formPopup.module.css";
import Workspace from "@/types/Workspace";
import EditWorkspaceValues from "../types/EditWorkspaceValues";

interface EditWorkspacePopupProps extends PopupProps {
  workspace: Workspace;
}

const EditWorkspacePopup: FC<EditWorkspacePopupProps> = ({
  open,
  setOpen,
  workspace,
}: EditWorkspacePopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const editWorkspace = (values: EditWorkspaceValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .put(`workspace/${workspace.id}`, values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Редактировать проект">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: workspace.name }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Обязательно")
              .min(3, "Минимум 3 символа"),
          })}
          onSubmit={(values: EditWorkspaceValues) => editWorkspace(values)}
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles.formPopup__inputs}>
                <InputBlock
                  label="Название"
                  name="name"
                  type="text"
                  placeholder="Проект А"
                />
              </div>
              <div className={styles.formPopup__submit}>
                <Button
                  title="Сохранить"
                  style={{ width: "100%" }}
                  type="submit"
                  disabled={isLoading}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </BasePopup>
  );
};

export default EditWorkspacePopup;
