import Dashboard from "@/components/dashboard/Dashboard";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { NextPage } from "next";
import React from "react";

const DashboardPage: NextPage = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
