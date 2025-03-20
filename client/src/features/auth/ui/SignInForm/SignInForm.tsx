import { useState } from "react";
import { useNavigate } from "react-router";
import UserValidator from "../../validation/User.validator";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import styles from "./SignInForm.module.css";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import { signInThunk } from "@/entities/user";
import { useAlert } from "@/features/alert";

const INITIAL_INPUTS_DATA = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showAlert } = useAlert();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isValid, error } = UserValidator.validateSignIn(inputs);
    if (!isValid) return showAlert(error || "Ошибка валидации");
    let result;

    try {
      result = await dispatch(signInThunk(inputs));
      if (result.payload?.statusCode === 200) {
        showAlert(result.payload?.message ?? "Вход выполнен");
        setInputs(INITIAL_INPUTS_DATA);
        navigate(CLIENT_ROUTES.MAIN);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      showAlert("Ошибка входа");
    }
  };

  const { email, password } = inputs;

  return (
    <>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="почта"
            onChange={onChangeHandler}
            value={email}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="пароль"
            onChange={onChangeHandler}
            value={password}
            className={styles.input}
          />
        </div>
        <button
          type="button"
          className={styles.navigateButton}
          onClick={() => navigate(CLIENT_ROUTES.SIGN_UP)}
        >
          Еще нет аккаунта?
        </button>
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </>
  );
}
