import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations/auth';
import { Helmet } from 'react-helmet-async';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main className={css.container}>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Welcome to the login page of the online phonebook. Log in to get your contact list."
        />
        <meta name="keywords" content="login, signin, phonebook" />
      </Helmet>
      <div className={css.smallContainer}>
        <h2 className={css.heading}>Log in</h2>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.row}>
            <label className={css.label} htmlFor="login-email">
              Email
            </label>
            <input
              className={css.input}
              type="email"
              name="email"
              id="login-email"
            />
          </div>
          <div className={css.row}>
            <label className={css.label} htmlFor="login-password">
              Password
            </label>
            <input
              className={css.input}
              type="password"
              name="password"
              id="login-password"
            />
          </div>
          <button className={css.submit} type="submit">
            Log in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
