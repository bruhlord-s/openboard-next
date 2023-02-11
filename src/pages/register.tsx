import AuthCard from "@/components/auth/card/AuthCard";
import AuthSignUp from "@/components/auth/sign-up/AuthSignUp";
import AuthLayout from "@/layouts/auth-layout/AuthLayout";
import React, { FC } from "react";

const RegisterPage: FC = () => {
  return (
    <AuthLayout>
      <AuthCard title="Sign Up">
        <AuthSignUp />
      </AuthCard>
    </AuthLayout>
  );
};

export default RegisterPage;
