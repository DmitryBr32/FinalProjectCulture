import Bar from "@/widgets/Bar/Bar";
import BarStorage from "@/widgets/BarStorage/BarStorage";
import styles from "./MyBarPage.module.css";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import { useNavigate } from "react-router";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useEffect } from "react";
import Cocktails from "@/widgets/Cocktails/Cocktails";

export default function MyBarPage() {
  const user = useAppSelector((state) => state.user.user?.id);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user === undefined) {
      navigate(CLIENT_ROUTES.SIGN_IN);
    }
  }, [user, isLoading, navigate]);

  if (isLoading || user === undefined) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <div className={styles.container}>
        <BarStorage />
        <Bar />
        <Cocktails />
      </div>
    </div>
  );
}
