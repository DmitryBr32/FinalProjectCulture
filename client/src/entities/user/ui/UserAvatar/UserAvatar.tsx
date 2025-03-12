import { IUser } from "../../model";
import styles from "./UserAvatar.module.css";

type Props = {
  user: IUser;
};

export function UserAvatar({ user }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img
          className={styles.avatar}
          src="https://i1.sndcdn.com/avatars-000480099366-j84trm-t1080x1080.jpg"
          alt={user.username}
        />
      </div>
      <span>{user.username}</span>
    </div>
  );
}
