import { useState } from "react";
import { useNavigate } from "react-router";
import UserValidator from "../../validation/User.validator";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import styles from "./SignUpForm.module.css";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import { signUpThunk } from "@/entities/user";
import { useAlert } from "@/features/alert";

const INITIAL_INPUTS_DATA = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function SignUpForm() {
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

    try {
      const result = await dispatch(signUpThunk(inputs));
      if (result.payload?.statusCode === 201) {
        showAlert(result.payload?.message ?? "Ошибка авторизации");
        setInputs(INITIAL_INPUTS_DATA);
        navigate(CLIENT_ROUTES.MAIN);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const { username, email, password, repeatPassword } = inputs;

  return (
    <>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="username"
            placeholder="имя"
            autoFocus
            onChange={onChangeHandler}
            value={username}
            className={styles.input}
          />
        </div>
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
        <div className={styles.formGroup}>
          <input
            type="password"
            name="repeatPassword"
            placeholder="повторите пароль"
            onChange={onChangeHandler}
            value={repeatPassword}
            className={styles.input}
          />
        </div>

        <button
          className={styles.navigateButton}
          type="button"
          onClick={() => navigate(CLIENT_ROUTES.SIGN_IN)}
        >
          Уже есть аккаунт?
        </button>
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}
