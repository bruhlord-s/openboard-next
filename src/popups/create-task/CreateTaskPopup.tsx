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

  const axios = useAxios();
  const updateData = useContext(UpdateWorkspaceContext);

  console.log(workspace.group);

  const boardOptions = workspace?.boards.map((board) => {
    return { label: board.name, value: board.id };
  });
  const assigneeOptions = workspace?.group.users.map((user) => {
    return { label: user.name, value: user.id };
  });

  useEffect(() => {
    setSelectedBoard(boardOptions[0]);
  }, []);

  const createTask = (value: CreateTaskValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios.post("task", value);
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Create new task">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
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
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Make some noise"
                  />
                  <div className={styles2.form__select}>
                    <p className={styles2.form__selectLabel}>Board</p>
                    <Select
                      options={boardOptions}
                      defaultValue={boardOptions[0]}
                      styles={selectStyles}
                      onChange={(value) => setSelectedBoard(value)}
                    />
                  </div>
                  <div className={styles2.form__select}>
                    <p className={styles2.form__selectLabel}>Assignee</p>
                    <Select
                      options={assigneeOptions}
                      defaultValue={assigneeOptions[0]}
                      styles={selectStyles}
                      onChange={(value) => setSelectedAssignee(value)}
                    />
                  </div>
                  <InputBlock
                    label="Time Estimated"
                    name="time_estimated"
                    type="text"
                    placeholder="1h 30m"
                  />
                </div>
                <div
                  className={styles.formPopup__inputs}
                  style={{ width: 500 }}
                >
                  <InputBlock
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Task description..."
                    as="textarea"
                    rows={6}
                  />
                  <TaskAttachments />
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

export default CreateTaskPopup;
