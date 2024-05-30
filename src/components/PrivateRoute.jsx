import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// something like notiflix I guess?

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
