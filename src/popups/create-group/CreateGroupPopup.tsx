import { Form, Formik } from "formik";
import { FC, useState } from "react";
import BasePopup from "../BasePopup";
import PopupProps from "../types/PopupProps";
import * as Yup from "yup";

import styles from "./createGroupPopup.module.css";
import useAxios from "@/hooks/useAxios";
import CreateGroupValues from "../types/CreateGroupValues";
import InputBlock from "@/components/input-block/InputBlock";
import Button from "@/components/button/Button";

const CreateGroupPopup: FC<PopupProps> = ({ open, setOpen }: PopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();

  const createGroup = (values: CreateGroupValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("group", values)
      .then(() => {
        setOpen(false);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Create new group">
      <div className={styles.createGroupPopup}>
        <Formik
          initialValues={{ name: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required").min(3, "Min 3 characters"),
          })}
          onSubmit={(values: CreateGroupValues) => createGroup(values)}
        >
          <Form>
            <div className={styles.createGroupPopup__form}>
              <div className={styles.createGroupPopup__inputs}>
                <InputBlock
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Amoguses"
                />
              </div>
              <div className={styles.createGroupPopup__submit}>
                <Button
                  title="Sign In"
                  style={{ width: 100 }}
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
