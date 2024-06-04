import css from './AuthNav.module.css';
import { StyledLink } from '../../../components/App.styled';

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};
