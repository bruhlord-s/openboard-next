import React, { FC } from "react";
import Avatar from "../avatar/Avatar";

import styles from "./assignee.module.css";
import User from "@/types/User";

interface AssigneeProps {
  user: User;
}

const Assignee: FC<AssigneeProps> = ({ user }: AssigneeProps) => {
  return (
    <div className={styles.assignee}>
      <Avatar width={20} height={20} src={"/images/avatar.png"} />
      <p className={styles.assignee__name}>{user.name}</p>
    </div>
  );
};

export default Assignee;
