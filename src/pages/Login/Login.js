import { logIn } from 'redux/users/operations';
import { useDispatch } from 'react-redux';
import css from './Login.module.css';

export const Login = () => {
  const dispatch = useDispatch();

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
    </>
  );
};
