import { FC } from "react";

import styles from "./dashboardMembers.module.css";
import User from "@/types/User";
import Avatar from "@/components/avatar/Avatar";

interface DashboardMembersProps {
  users: User[];
}

function declOfNum(number: number, words: string[]) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

const DashboardMembers: FC<DashboardMembersProps> = ({
  users,
}: DashboardMembersProps) => {
  return (
    <div className={styles.dashboardMembers}>
      <div className={styles.dashboardMembers__avatars}>
        {users.slice(0, 3).map((user, i) => (
          <div
            className={styles.dashboardMember}
            key={i}
            style={{ left: `-${i * 12}px` }}
          >
            <Avatar width={32} height={32} src={user.avatar} />
          </div>
        ))}
      </div>

      <p
        className={styles.dashboardMembers__count}
        style={{ left: `-${users.slice(0, 3).length * 12}px` }}
      >
        {users.length}{" "}
        {declOfNum(users.length, ["участник", "участника", "участников"])}
      </p>
    </div>
  );
};

export default DashboardMembers;
