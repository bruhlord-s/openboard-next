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
import { UpdateWorkspaceContext } from "@/components/dashboard/Dashboard";
import EditBoardValues from "../types/EditBoardValues";
import Board from "@/types/Board";

interface EditBoardPopupProps extends PopupProps {
  board: Board;
}

const EditBoardPopup: FC<EditBoardPopupProps> = ({
  open,
  setOpen,
  board,
}: EditBoardPopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [color, setColor] = useState<string>(board.color);

  const axios = useAxios();
  const updateData = useContext(UpdateWorkspaceContext);

  const editBoard = (values: EditBoardValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .put(`board/${board.id}`, values)
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Редактировать доску">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: board.name, color }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Обязательно")
              .min(3, "Минимум 3 символа"),
          })}
          onSubmit={(values: EditBoardValues) =>
            editBoard({ ...values, color })
          }
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles.formPopup__inputs}>
                <div className={styles.formPopup__row}>
                  <InputBlock
                    label="Название"
                    name="name"
                    type="text"
                    placeholder="Интересные задачи"
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

export default EditBoardPopup;
