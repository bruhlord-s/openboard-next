import Dashboard from "@/components/dashboard/Dashboard";
import DashboardLayout from "@/layouts/dashboard-layout/DashboardLayout";
import { NextPage } from "next";
import React, { createContext, useState } from "react";

interface WorkspaceContextProps {
  currentWorkspaceId: number | null;
  setCurrentWorkspaceId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const WorkspaceContext = createContext<WorkspaceContextProps | null>(
  null
);

const DashboardPage: NextPage = () => {
  const [currentWorkspaceId, setCurrentWorkspaceId] = useState<number | null>(
    null
  );

  return (
    <WorkspaceContext.Provider
      value={{ currentWorkspaceId, setCurrentWorkspaceId }}
    >
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </WorkspaceContext.Provider>
  );
};

export default DashboardPage;
