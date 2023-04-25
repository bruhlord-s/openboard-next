import { FC, useContext, useState } from "react";
import PopupProps from "../types/PopupProps";
import BasePopup from "../BasePopup";
import { Form, Formik } from "formik";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import CreateWorkspaceValues from "../types/CreateWorkspaceValues";
import * as Yup from "yup";

import styles from "../formPopup.module.css";
import useAxios from "@/hooks/useAxios";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";

export interface CreateWorkspacePopupProps extends PopupProps {
  groupId: number;
}

const CreateWorkspacePopup: FC<CreateWorkspacePopupProps> = ({
  open,
  setOpen,
  groupId,
}: CreateWorkspacePopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const createWorkspace = (values: CreateWorkspaceValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("workspace", values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Create new workspace">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
          })}
          onSubmit={(values: CreateWorkspaceValues) =>
            createWorkspace({ ...values, group_id: groupId })
          }
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
                  title="Create"
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

export default CreateWorkspacePopup;
