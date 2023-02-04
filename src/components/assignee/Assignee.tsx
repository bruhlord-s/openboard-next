import React, { FC } from "react";
import Avatar from "../avatar/Avatar";

import styles from "./assignee.module.css";

const Assignee: FC = () => {
  return (
    <div className={styles.assignee}>
      <Avatar width={20} height={20} src={"/images/avatar.png"} />
      <p className={styles.assignee__name}>John Doe</p>
    </div>
  );
};

export default Assignee;
