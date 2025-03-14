import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { NavLink, useNavigate } from "react-router";
import styles from "./Header.module.css";
import { UserAvatar } from "@/entities/user/ui/UserAvatar/UserAvatar";
import { JSX, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { signOutThunk } from "@/entities/user";
import { initializeCart } from "@/app/store/cart";
import { getCart } from "@/shared/api/api";
//import { useAlert } from "@/features/alerts";

export function Header(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  //const { showAlert } = useAlert();
  
  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCart();
      dispatch(initializeCart(cartData));
    };

    fetchData();
  }, [dispatch]);

  const cart = useAppSelector((state) => state.cart.items);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

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
          <NavLink
            to={CLIENT_ROUTES.BASKETS} 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Корзина
            {totalQuantity > 0 && (
              <span className={styles.cartQuantity}>{totalQuantity}</span>
            )}
          </NavLink>
          <NavLink
            to={CLIENT_ROUTES.ORDERS} 
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Заказы
          </NavLink>
          <UserAvatar user={user} />
          <button onClick={onLogoutHandler} className={styles.button}>
            Выйти
          </button>
        </>
      )}
    </nav>
  );
}