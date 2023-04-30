import { FC } from "react";

import styles from "./taskAttachments.module.css";

const TaskAttachments: FC = () => {
  return (
    <div className={styles.form__attachments}>
      <div className={styles.form__attachmentsHeader}>
        <p className={styles.form__attachmentsLabel}>Attachments</p>
        <p className={styles.form__attachmentsBtn}>Upload</p>
      </div>
    </div>
  );
};

export default TaskAttachments;
