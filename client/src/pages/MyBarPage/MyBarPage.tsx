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
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(CLIENT_ROUTES.MAIN);
      return;
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Мой бар</h1>
      <div className={styles.container}>
        <BarStorage />
        <Bar />
        <Cocktails />
      </div>
    </div>
  );
}
