import React, { useState } from "react";
import s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { auth } from "./../../../firebase";
import { useHistory } from "react-router-dom";

export const Login = ({ setLogin }) => {
  const { register, errors, handleSubmit, watch } = useForm();
  const [isOpen, setOpen] = useState(false);
  const [errorText, setErrorText] = useState({
    isError: false,
    message: "",
  });

  let history = useHistory();

  let emailValue = watch("email"),
    passwordValue = watch("password");

  const signIn = () => {
    return auth
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .then((response) => {
        setErrorText({ isError: false, message: null });
        history.push("/");
        setLogin(response.user.email);
      })
      .catch((e) => {
        setErrorText({ isError: true, message: `${e}` });
      });
  };

  const createUser = () => {
    auth
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((response) => {
        setErrorText({ isError: false, message: null });
        setOpen(false);
      })
      .catch((e) => {
        setErrorText({ isError: true, message: `${e}` });
      });
  };

  return (
    <div className={s.login}>
      <h1 className={s.loginTitle}>
        Sign <span>in</span>
      </h1>
      <p className={s.warningText}>{errorText.message}</p>
      <form className={s.loginForm} onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">
          E-mail{" "}
          {errors.email && (
            <p className={s.errorMessage}>This field is required!</p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: true })}
          />
        </label>

        <label htmlFor="password">
          Password
          {errors.password && (
            <p className={s.errorMessage}>This field is required!</p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            ref={register({ required: true })}
          />
        </label>
        <input type="submit" value="Sign in" className={s.loginButton} />
        <p>or</p>
        <button
          className={`${s.loginButton} ${s.createAccountButton} `}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!isOpen);
          }}
        >
          Create your Amazon account
        </button>
      </form>
      {isOpen && (
        <form
          className={`${s.loginForm} ${s.signUpForm} ${isOpen && s.modalOpen}`}
          onSubmit={handleSubmit(createUser)}
        >
          <div className={s.closeModalButton} onClick={() => setOpen(false)}>
            &times;
          </div>
          <h1 className={`${s.signUpTitle}`}>
            Sign <span>up</span>
          </h1>
          <p className={s.errorMessage}>{errorText.message}</p>
          <label htmlFor="email">
            Your e-mail{" "}
            {errors.email && (
              <p className={s.errorMessage}>This field is required!</p>
            )}
            <input
              type="email"
              name="email"
              id="email"
              ref={register({ required: true })}
            />
          </label>

          <label htmlFor="password">
            Your password
            {errors.password && (
              <p className={s.errorMessage}>This field is required!</p>
            )}
            <input
              type="password"
              name="password"
              id="password"
              ref={register({ required: true })}
            />
          </label>
          <input type="submit" value="Sign up" className={s.loginButton} />
        </form>
      )}
    </div>
  );
};
