import Button from "@/components/button/Button";
import InputBlock from "@/components/input-block/InputBlock";
import useAxios from "@/hooks/useAxios";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import * as Yup from "yup";

import styles from "./authSignIn.module.css";
import { SignInValues } from "./types/SignInValues";
import Link from "next/link";
import ErrorMessage from "@/components/error-message/ErrorMessage";

const AuthSignIn: FC = () => {
  const router = useRouter();
  const axios = useAxios();

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (values: SignInValues) => {
    if (isLoading) return;

    setError("");
    setIsLoading(true);

    axios
      .post("login", values)
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
    <div className={styles.authSignIn}>
      {!!error && (
        <div className={styles.authSignIn__error}>
          <ErrorMessage message={error} />
        </div>
      )}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Невалидно").required("Обязательно"),
          password: Yup.string()
            .min(8, "Минимум 8 символов")
            .required("Обязательно"),
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div className={styles.authSignIn__form}>
            <div className={styles.authSignIn__inputs}>
              <InputBlock
                label="Email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
              />
              <InputBlock
                label="Пароль"
                name="password"
                type="password"
                placeholder="●●●●●●●●"
              />
            </div>
            <div className={styles.authSignIn__submit}>
              <Button title="Войти" style={{ width: 100 }} type="submit" />

              <span className={styles.authSignIn__link}>
                <p>Еще нет аккаунта?</p>
                <Link href="/register">Создайте</Link>
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthSignIn;
