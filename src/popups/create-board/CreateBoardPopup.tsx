import { Form, Formik } from "formik";
import React, { FC, useContext, useState } from "react";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import styles from "../formPopup.module.css";
import useAxios from "@/hooks/useAxios";
import CreateBoardValues from "../types/CreateBoardValues";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import { DataContext } from "@/layouts/dashboard-layout/DashboardLayout";
import { UpdateWorkspaceContext } from "@/components/dashboard/Dashboard";

// one of this colors applies to board by default
const defaultColors = ["#2F323A", "#C47AC0", "#FFFD98"];

interface CreateBoardPopupProps extends PopupProps {
  workspaceId: number;
}

const CreateBoardPopup: FC<CreateBoardPopupProps> = ({
  open,
  setOpen,
  workspaceId,
}: CreateBoardPopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [color, setColor] = useState<string>(
    defaultColors[Math.floor(Math.random() * defaultColors.length)] // gets a random color from array
  );

  const axios = useAxios();
  const updateData = useContext(UpdateWorkspaceContext);

  const createBoard = (values: CreateBoardValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("board", values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Create new board">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: "", color }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
          })}
          onSubmit={(values: CreateBoardValues) =>
            createBoard({ ...values, color, workspace_id: workspaceId })
          }
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles.formPopup__inputs}>
                <div className={styles.formPopup__row}>
                  <InputBlock
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Amoguses"
                  />
                  <input
                    className={styles.formPopup__colorInput}
                    type="color"
                    value={color}
                    onInput={(e) => setColor(e.currentTarget.value)}
                  />
                </div>
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

export default CreateBoardPopup;
