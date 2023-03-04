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
          email: Yup.string().email("Invalid").required("Required"),
          name: Yup.string().required("Required"),
          password: Yup.string()
            .min(8, "Min 8 characters")
            .required("Required"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Doesn't match"
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
                label="Name"
                name="name"
                type="text"
                placeholder="John Doe"
              />
              <InputBlock
                label="Password"
                name="password"
                type="password"
                placeholder="●●●●●●●●"
              />
              <InputBlock
                label="Confirm Password"
                name="password_confirmation"
                type="password"
                placeholder="●●●●●●●●"
              />
            </div>
            <div className={styles.authSignUp__submit}>
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
  );
};

export default AuthSignUp;
