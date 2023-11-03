import { logIn } from 'redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './Login.module.css';
import { selectIsLoggedIn } from 'redux/users/selectors';
import { useState } from 'react';

export const Login = () => {
  const dispatch = useDispatch();
  const [loginAttempt, setLoginAttempt] = useState(false);

  return (
    <>
      <form
        className={css.form}
        onSubmit={evt => {
          evt.preventDefault();
          const form = evt.currentTarget;
          dispatch(
            logIn({
              email: form.elements.email.value,
              password: form.elements.password.value,
            })
          );
          setLoginAttempt(true);
          form.reset();
        }}
      >
        <label for="email" className={css.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={css.input}
          required
        ></input>
        <br></br>
        <br></br>

        <label for="password" className={css.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={css.input}
          required
        ></input>
        <button type="submit" className={css.button}>
          Login
        </button>
      </form>
      {!useSelector(selectIsLoggedIn) && loginAttempt && (
        <p className={css.loginError}>Invalid credentials!</p>
      )}
    </>
  );
};
