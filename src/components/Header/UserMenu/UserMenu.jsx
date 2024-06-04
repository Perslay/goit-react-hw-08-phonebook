import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/operations/auth';
import { useAuth } from '../../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
