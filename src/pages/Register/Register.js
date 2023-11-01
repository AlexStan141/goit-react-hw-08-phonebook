import { useDispatch } from 'react-redux';
import { register } from 'redux/users/operations';
import css from './Register.module.css';

export const Register = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form
        className={css.form}
        onSubmit={evt => {
          evt.preventDefault();
          const form = evt.currentTarget;
          dispatch(
            register({
              name: form.elements.name.value,
              email: form.elements.email.value,
              password: form.elements.password.value,
            })
          );
          form.reset();
        }}
      >
        <label for="name" className={css.label}>
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          required
        ></input>
        <br></br>
        <br></br>

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
          Register
        </button>
      </form>
    </>
  );
};
