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
import styles2 from "./editProfilePopup.module.css";
import User from "@/types/User";
import EditProfileValues from "../types/EditProfileValues";
import Avatar from "@/components/avatar/Avatar";

interface EditProfilePopupProps extends PopupProps {
  user: User;
}

const EditProfilePopup: FC<EditProfilePopupProps> = ({
  open,
  setOpen,
  user,
}: EditProfilePopupProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const axios = useAxios();
  const updateData = useContext(DataContext);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.FormEvent<HTMLInputElement>) => {
    setAvatarFile(e.currentTarget.files ? e.currentTarget.files[0] : null);
  };

  const editProfile = (values: EditProfileValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    let formData = new FormData();
    formData.append("name", values.name);

    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    axios
      .post(`user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setOpen(false);
        setAvatarFile(null);
        updateData();
      })
      .catch((err) => setError(err?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <BasePopup open={open} setOpen={setOpen} title="Редактировать профиль">
      <div className={styles.formPopup}>
        <Formik
          initialValues={{ name: user.name, email: user.email }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Обязательно")
              .min(3, "Минимум 3 символа"),
          })}
          onSubmit={(values: EditProfileValues) => editProfile(values)}
        >
          <Form>
            <div className={styles.formPopup__form}>
              <div className={styles2.form}>
                <div
                  className={styles2.form__avatar}
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                >
                  <Avatar
                    width={100}
                    height={100}
                    src={
                      avatarFile ? URL.createObjectURL(avatarFile) : user.avatar
                    }
                  />
                  <p>Нажмите, чтобы поменять аватарку</p>
                  <input
                    type="file"
                    name="file"
                    hidden
                    accept="image/png, image/jpeg"
                    ref={fileInputRef}
                    onInput={(e) => handleFileUpload(e)}
                  />
                </div>
                <div className={styles2.form__fields}>
                  <InputBlock
                    name="name"
                    type="text"
                    label="Имя"
                    placeholder="Иван Васильев"
                  />
                  <InputBlock
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="user@example.com"
                    disabled
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

export default EditProfilePopup;
