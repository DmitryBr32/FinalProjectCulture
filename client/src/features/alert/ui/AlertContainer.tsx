import { useAlert } from '../hooks/useAlert';
import { Alert } from './Alert';
import styles from './Alert.module.css';

export function AlertContainer() {
  const { alerts } = useAlert();

  return (
    <div className={styles.alertContainer}>
      {alerts.map((alert) => (
        <Alert key={alert.id} message={alert.message} />
      ))}
    </div>
  );
}
