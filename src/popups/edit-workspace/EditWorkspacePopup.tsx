import useAxios from "@/hooks/useAxios";
import React, { FC, useContext, useState } from "react";
import BasePopup from "../BasePopup";
import EditGroupValues from "../types/EditGroupValues";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";

import styles from "../formPopup.module.css";
import Workspace from "@/types/Workspace";

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

  const editGroup = (values: EditGroupValues) => {
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
    <BasePopup open={open} setOpen={setOpen} title="Edit group">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: workspace.name }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
          })}
          onSubmit={(values: EditGroupValues) => editGroup(values)}
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles.formPopup__inputs}>
                <InputBlock
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Amoguses"
                />
              </div>
              <div className={styles.formPopup__submit}>
                <Button
                  title="Edit"
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
