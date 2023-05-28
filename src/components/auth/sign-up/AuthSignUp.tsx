import Button from "@/components/button/Button";
import ErrorMessage from "@/components/error-message/ErrorMessage";
import InputBlock from "@/components/input-block/InputBlock";
import { Form, Formik } from "formik";
import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import * as Yup from "yup";

import styles from "./authSignUp.module.css";
import SignUpValues from "./types/SignUpValues";
import Link from "next/link";

const AuthSignUp: FC = () => {
  const router = useRouter();
  const axios = useAxios();

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (values: SignUpValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("register", values)
      .then((res) => {
        localStorage.setItem("auth_token", res.data.token);
        router.push("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.authSignUp}>
      {!!error && (
        <div className={styles.authSignUp__error}>
          <ErrorMessage message={error} />
        </div>
      )}
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().email("Невалидно").required("Обязательно"),
          name: Yup.string().required("Обязательно"),
          password: Yup.string()
            .min(8, "Минимум 8 символов")
            .required("Обязательно"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password")],
            "Не совпадает"
          ),
        })}
        onSubmit={(values: SignUpValues) => handleSubmit(values)}
      >
        <Form>
          <div className={styles.authSignUp__form}>
            <div className={styles.authSignUp__inputs}>
              <InputBlock
                label="Email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
              <InputBlock
                label="Имя"
                name="name"
                type="text"
                placeholder="Джон Доу"
              />
              <InputBlock
                label="Пароль"
                name="password"
                type="password"
                placeholder="●●●●●●●●"
              />
              <InputBlock
                label="Подтверждение пароля"
                name="password_confirmation"
                type="password"
                placeholder="●●●●●●●●"
              />
            </div>
            <div className={styles.authSignUp__submit}>
              <Button
                title="Создать аккаунт"
                style={{ width: 175 }}
                type="submit"
                disabled={isLoading}
              />

              <span className={styles.authSignUp__link}>
                <p>Уже есть аккаунт?</p>
                <Link href="/login">Войдите</Link>
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthSignUp;
