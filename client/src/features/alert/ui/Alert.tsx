import { useEffect, useState } from 'react';
import styles from './Alert.module.css';

type Props = {
  message: string;
};

export function Alert({ message }: Props) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 2700);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${styles.alert} ${isExiting ? styles.exit : styles.enter}`}
    >
      {message}
    </div>
  );
}
