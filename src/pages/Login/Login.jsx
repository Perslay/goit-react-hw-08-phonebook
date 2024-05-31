import css from './Login.module.css';

const Login = () => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
