import styles from "./AdminPage.module.css"
import Orders from "@/pages/OrdersPage/OrdersPage";

export function AdminPage() {
    return (
        <p className={styles.whiteText}>
           Администратор
           <Orders />
          </p>
    );
  }
  