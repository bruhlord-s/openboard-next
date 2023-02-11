import AuthCard from "@/components/auth/card/AuthCard";
import AuthSignIn from "@/components/auth/sign-in/AuthSignIn";
import AuthLayout from "@/layouts/auth-layout/AuthLayout";
import { NextPage } from "next";
import React from "react";

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <AuthCard title="Sign In">
        <AuthSignIn />
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
