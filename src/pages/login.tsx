import AuthCard from "@/components/auth-card/AuthCard";
import AuthLayout from "@/layouts/auth-layout/AuthLayout";
import { NextPage } from "next";
import React from "react";

import styles from "../styles/modules/login.module.css";

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <AuthCard title="Sign In" />
    </AuthLayout>
  );
};

export default LoginPage;
