import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import DashboardBoards from "./boards/DashboardBoards";

import styles from "./dashboard.module.css";
import DashboardHeader from "./header/DashboardHeader";
import { WorkspaceContext } from "@/pages";
import DashboardEmpty from "./empty/DashboardEmpty";
import Workspace from "@/types/Workspace";
import useAxios from "@/hooks/useAxios";
import SkeletonRectangle from "../skeleton/rectangle/SkeletonRectangle";

export const UpdateWorkspaceContext = createContext<CallableFunction>(() => {});

const emptyWorkspace = {
  id: 0,
  group_id: 0,
  name: "",
  boards: [],
  group: {
    id: 0,
    name: "",
    slug: "",
    workspaces: [],
    users: [],
  },
};

export const WorkspaceDataContext = createContext<Workspace>(emptyWorkspace);
export const SetWorkspaceContext = createContext<any>(null);

const Dashboard: FC = () => {
  const [workspace, setWorkspace] = useState<Workspace>(emptyWorkspace);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rerenderKey, setRerenderKey] = useState<number>(1);

  const axios = useAxios();
  const workspaceId = useContext(WorkspaceContext)?.currentWorkspaceId;

  const fetchWorkspace = () => {
    if (!workspaceId) return;

    setIsLoading(true);

    axios
      .get(`/workspace/${workspaceId}`)
      .then((res) => {
        setWorkspace(res.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchWorkspace();
    //eslint-disable-next-line
  }, [workspaceId]);

  useEffect(() => {
    setRerenderKey(rerenderKey + 1);
  }, [workspace, setRerenderKey]);

  return workspaceId !== null ? (
    <WorkspaceDataContext.Provider value={workspace}>
      <UpdateWorkspaceContext.Provider value={fetchWorkspace}>
        <SetWorkspaceContext.Provider value={setWorkspace}>
          <div className={styles.dashboard} key={rerenderKey}>
            <div className={styles.dashboard__header}>
              {isLoading ? (
                <SkeletonRectangle style={{ width: 275, height: 28 }} />
              ) : (
                <DashboardHeader workspace={workspace} />
              )}
            </div>
            <div className={styles.dashboard__boards}>
              {isLoading ? (
                <div className={styles.dashboard__boardsLoading}>
                  <SkeletonRectangle style={{ width: 300, height: 350 }} />
                  <SkeletonRectangle style={{ width: 300, height: 450 }} />
                  <SkeletonRectangle style={{ width: 300, height: 400 }} />
                </div>
              ) : (
                <DashboardBoards boards={workspace.boards} />
              )}
            </div>
          </div>
        </SetWorkspaceContext.Provider>
      </UpdateWorkspaceContext.Provider>
    </WorkspaceDataContext.Provider>
  ) : (
    <DashboardEmpty />
  );
};

export default Dashboard;
