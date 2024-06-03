import { Helmet } from 'react-helmet-async';
import css from './Login.module.css';

const Login = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Welcome to the login page of the online phonebook. Log in to get your contact list."
        />
        <meta name="keywords" content="login, signin, phonebook" />
      </Helmet>
      <form className={css.form}>
        <div>
          <label htmlFor="login-email">Email</label>
          <input type="email" name="email" id="login-email" />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input type="password" name="password" id="login-password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
};

export default Login;
