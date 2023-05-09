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
import Group from "@/types/Group";
import InviteGroupValues from "../types/InviteGroupValues";

interface InviteGroupPopupProps extends PopupProps {
  group: Group;
}

const InviteGroupPopup: FC<InviteGroupPopupProps> = ({
  open,
  setOpen,
  group,
}: InviteGroupPopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const invite = (values: InviteGroupValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post(`group/invite/${group.id}`, values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Добавить пользователя">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Обязательно")
              .email("Невалидно")
              .min(3, "Минимум 3 символа"),
          })}
          onSubmit={(values: InviteGroupValues) => invite(values)}
        >
          <Form>
            {error && <p className={styles.formPopup__error}>{error}</p>}
            <div className={styles.formPopup__form}>
              <div className={styles.formPopup__inputs}>
                <InputBlock
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                />
              </div>
              <div className={styles.formPopup__submit}>
                <Button
                  title="Добавить"
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

export default InviteGroupPopup;
