import { Form, Formik } from "formik";
import { FC, useContext, useState } from "react";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import styles from "../formPopup.module.css";
import useAxios from "@/hooks/useAxios";
import CreateGroupValues from "../types/CreateGroupValues";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";

const CreateGroupPopup: FC<PopupProps> = ({ open, setOpen }: PopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const createGroup = (values: CreateGroupValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("group", values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Create new group">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
          })}
          onSubmit={(values: CreateGroupValues) => createGroup(values)}
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

export default CreateGroupPopup;
