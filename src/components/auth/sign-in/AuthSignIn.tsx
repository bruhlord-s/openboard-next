import Button from "@/components/button/Button";
import InputBlock from "@/components/input-block/InputBlock";
import { Form, Formik } from "formik";
import React, { FC } from "react";
import * as Yup from "yup";

import styles from "./authSignIn.module.css";

const AuthSignIn: FC = () => {
  return (
    <div className={styles.authSignIn}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid").required("Required"),
          password: Yup.string()
            .min(8, "Min 8 characters")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
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
                label="Password"
                name="password"
                type="password"
                placeholder="●●●●●●●●"
              />
            </div>
            <div className={styles.authSignIn__submit}>
              <Button title="Sign In" style={{ width: 100 }} type="submit" />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthSignIn;
