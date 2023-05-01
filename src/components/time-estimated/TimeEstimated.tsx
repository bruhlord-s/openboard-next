import Image from "next/image";
import React, { FC } from "react";

import styles from "./timeEstimated.module.css";

interface TimeEstimatedProps {
  time: number;
}

const TimeEstimated: FC<TimeEstimatedProps> = ({
  time,
}: TimeEstimatedProps) => {
  const convertSecondsToTime = (seconds: number): string => {
    let hours = Math.floor(seconds / (60 * 60));

    let divisorForMinutes = seconds % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);

    return `${hours ? `${hours}h` : ""}${minutes ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className={styles.timeEstimated}>
      <Image width={14} height={14} alt={"Time"} src={"icons/time.svg"} />
      <p className={styles.timeEstimated__time}>{convertSecondsToTime(time)}</p>
    </div>
  );
};

export default TimeEstimated;
