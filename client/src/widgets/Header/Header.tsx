import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";
import { UserAvatar } from "@/entities/user/ui/UserAvatar/UserAvatar";
import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { signOutThunk } from "@/entities/user";
//import { useAlert } from "@/features/alerts";

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  //const { showAlert } = useAlert();

  const onLogoutHandler = async () => {
    dispatch(signOutThunk());
    //showAlert("Вы вышли из системы", 200);
    navigate(CLIENT_ROUTES.SIGN_IN);
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to={CLIENT_ROUTES.MAIN}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Главная
      </NavLink>
      <NavLink
        to={CLIENT_ROUTES.SHOP_FORM}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Магазин
      </NavLink>
      <NavLink
        to={CLIENT_ROUTES.JOURNAL}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Журнал
      </NavLink>
      {!user && (
        <>
          <NavLink
            to={CLIENT_ROUTES.SIGN_IN}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Вход
          </NavLink>
          <NavLink
            to={CLIENT_ROUTES.SIGN_UP}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Регистрация
          </NavLink>
        </>
      )}
      {user && (
        <>
          <UserAvatar user={user} />
          <button onClick={onLogoutHandler}>Выйти</button>
        </>
      )}
    </nav>
  );
}
