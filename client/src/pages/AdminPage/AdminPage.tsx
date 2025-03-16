import styles from "./AdminPage.module.css"
import Orders from "@/pages/OrdersPage/OrdersPage";

export function AdminPage() {
    return (
        <div className={styles.whiteText}>
           Администратор
           <Orders />
          </div>
    );
  }
  