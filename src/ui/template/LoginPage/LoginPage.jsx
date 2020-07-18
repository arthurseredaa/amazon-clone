import React from "react";
import s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { auth } from "./../../../firebase";

export const Login = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmitData = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => console.log(response));
  };

  return (
    <div className={s.login}>
      <h1 className={s.loginTitle}>Sign in</h1>
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmitData)}>
        <label htmlFor="email">
          E-mail <input type="email" name="email" id="email" ref={register()} />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            ref={register()}
          />
        </label>
        <input type="submit" value="Sign in" className={s.loginButton} />
      </form>
    </div>
  );
};
