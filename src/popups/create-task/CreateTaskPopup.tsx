import { UpdateWorkspaceContext } from "@/components/dashboard/Dashboard";
import useAxios from "@/hooks/useAxios";
import { FC, useContext, useEffect, useState } from "react";
import CreateTaskValues from "../types/CreateTaskValues";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import styles from "../formPopup.module.css";
import styles2 from "./createTaskPopup.module.css";

import { Form, Formik } from "formik";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";
import Workspace from "@/types/Workspace";
import Select, { SingleValue, StylesConfig } from "react-select";
import TaskAttachments from "@/components/task-attachments/TaskAttachments";

interface SelectValue {
  value: number;
  label: string;
}

interface CreateTaskPopupProps extends PopupProps {
  workspace: Workspace;
}

const convertTimeToSeconds = (time: string): number => {
  let seconds = 0;

  let hours = time.match(/(\d+)\s*h/);
  let minutes = time.match(/(\d+)\s*m/);
  let secs = time.match(/(\d+)\s*s/);

  if (hours) {
    seconds += parseInt(hours[1]) * 3600;
  }
  if (minutes) {
    seconds += parseInt(minutes[1]) * 60;
  }
  if (secs) {
    seconds += parseInt(secs[1]);
  }

  return seconds;
};

const selectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    border: "1px solid var(--gray)",
    borderRadius: 6,
    paddingLeft: "6px",
  }),
};

const CreateTaskPopup: FC<CreateTaskPopupProps> = ({
  open,
  setOpen,
  workspace,
}: CreateTaskPopupProps) => {
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBoard, setSelectedBoard] = useState<SingleValue<SelectValue>>({
    label: "",
    value: 0,
  });
  const [selectedAssignee, setSelectedAssignee] = useState<
    SingleValue<SelectValue>
  >({
    label: "",
    value: 0,
  });
  const [attachments, setAttachments] = useState<any[]>([]);

  const axios = useAxios();
  const updateData = useContext(UpdateWorkspaceContext);

  const boardOptions = workspace?.boards.map((board) => {
    return { label: board.name, value: board.id };
  });
  const assigneeOptions = workspace?.group.users.map((user) => {
    return { label: user.name, value: user.id };
  });

  useEffect(() => {
    setSelectedBoard(boardOptions[0]);
    setSelectedAssignee(assigneeOptions[0]);
  }, []);

  const createTask = (value: CreateTaskValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    let formData = new FormData();
    formData.append("name", value.name);
    formData.append("user_id", selectedAssignee?.value.toString() || "");
    formData.append("board_id", selectedBoard?.value.toString() || "");
    formData.append("description", value.description || "");
    formData.append(
      "time_estimated",
      value.time_estimated
        ? convertTimeToSeconds(value.time_estimated).toString()
        : "0"
    );
    attachments.forEach((attachment) => {
      formData.append("attachments[]", attachment);
    });

    axios
      .post("task", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setOpen(false);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Создать задачу">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: "", time_estimated: "", description: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Обязательно")
              .min(3, "Минимум 3 символа"),
            time_estimated: Yup.string().matches(
              /^(?:\d+h)?(?:(?!\n)\s)?(?:\d+m)?(?:(?!\n)\s)?(?:\d+s)?$/,
              "Неверный формат"
            ),
          })}
          onSubmit={(values: CreateTaskValues) => createTask({ ...values })}
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles2.form__column}>
                <div
                  className={styles.formPopup__inputs}
                  style={{ width: 400 }}
                >
                  <InputBlock
                    label="Название"
                    name="name"
                    type="text"
                    placeholder="Перекрасить кнопку"
                  />
                  <div className={styles2.form__select}>
                    <p className={styles2.form__selectLabel}>Доска</p>
                    <Select
                      options={boardOptions}
                      defaultValue={boardOptions[0]}
                      styles={selectStyles}
                      onChange={(value) => setSelectedBoard(value)}
                    />
                  </div>
                  <div className={styles2.form__select}>
                    <p className={styles2.form__selectLabel}>Ответственный</p>
                    <Select
                      options={assigneeOptions}
                      defaultValue={assigneeOptions[0]}
                      styles={selectStyles}
                      onChange={(value) => setSelectedAssignee(value)}
                    />
                  </div>
                  <InputBlock
                    label="Предпологаемое время"
                    name="time_estimated"
                    type="text"
                    placeholder="1h 30m 59s"
                  />
                </div>
                <div
                  className={styles.formPopup__inputs}
                  style={{ width: 500 }}
                >
                  <InputBlock
                    label="Описание"
                    name="description"
                    type="text"
                    placeholder="Перекрасить кнопку из салатового в зеленый"
                    as="textarea"
                    rows={6}
                  />
                  <TaskAttachments
                    attachments={attachments}
                    setAttachments={setAttachments}
                  />
                </div>
              </div>

              <div className={styles.formPopup__submit}>
                <Button
                  title="Создать"
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

export default CreateTaskPopup;
