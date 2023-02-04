import Image from "next/image";
import React, { FC } from "react";

import styles from "./timeEstimated.module.css";

const TimeEstimated: FC = () => {
  return (
    <div className={styles.timeEstimated}>
      <Image width={14} height={14} alt={"Time"} src={"icons/time.svg"} />
      <p className={styles.timeEstimated__time}>4h</p>
    </div>
  );
};

export default TimeEstimated;
