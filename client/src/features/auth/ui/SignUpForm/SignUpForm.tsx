import { useState } from "react";
import { useNavigate } from "react-router";
import UserValidator from "../../validation/User.validator";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import styles from "./SignUpForm.module.css";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import { signUpThunk } from "@/entities/user";
//import { useAlert } from "@/features/alerts";

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
  //const { showAlert } = useAlert();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isValid, error } = UserValidator.validateSignIn(inputs);

    if (!isValid) return alert(error);

    try {
      const result = await dispatch(signUpThunk(inputs));
      if (result.payload?.statusCode === 201) {
        // showAlert(
        //   result.payload?.message ?? "Ошибка авторизации",
        //   result.payload.statusCode
        // );
        setInputs(INITIAL_INPUTS_DATA);
        navigate(CLIENT_ROUTES.MAIN);
      }
    } catch (error) {
      console.log(error);
      // showAlert("Ошибка при регистрации", 500);
    }
  };

  const { username, email, password, repeatPassword } = inputs;

  return (
    <form className={styles.signUpform} onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="username"
        placeholder="username"
        autoFocus
        onChange={onChangeHandler}
        value={username}
      />

      <input
        type="email"
        name="email"
        placeholder="email?"
        onChange={onChangeHandler}
        value={email}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={onChangeHandler}
        value={password}
      />

      <input
        type="password"
        name="repeatPassword"
        placeholder="repeat password"
        onChange={onChangeHandler}
        value={repeatPassword}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}
