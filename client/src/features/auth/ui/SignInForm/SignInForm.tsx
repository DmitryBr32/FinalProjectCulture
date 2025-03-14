import { useState } from "react";
import { useNavigate } from "react-router";
import UserValidator from "../../validation/User.validator";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import styles from "./SignInForm.module.css";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import { signInThunk } from "@/entities/user";
//import { useAlert } from "@/features/alerts";

const INITIAL_INPUTS_DATA = {
  email: "",
  password: "",
};

export default function SignInForm() {
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
      const result = await dispatch(signInThunk(inputs));
      if (result.payload?.statusCode === 200) {
        // showAlert(
        //   result.payload?.message ?? "Ошибка входа",
        //   result.payload.statusCode
        // );
        setInputs(INITIAL_INPUTS_DATA);
        navigate(CLIENT_ROUTES.MAIN);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = inputs;

  return (
    <div>
      <form className={styles.signInform} onSubmit={onSubmitHandler}>
        <input
          type="email"
          name="email"
          placeholder="email"
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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
