import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading, selectError } from '../redux/selectors';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
// import { fetchContacts } from '../redux/operations/contacts';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/operations/auth';
// import css from '../styles/App.module.css';
// import { ContactList } from './ContactList';
// import { ContactForm } from './ContactForm';
// import { Loader } from './Loader';
// import { Filter } from './Filter';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <div>
    //   {isLoading && !error && <Loader />}
    //   <div className={css.appContainer}>
    //     <h1 className={css.firstHeading}>Phonebook</h1>
    //     <ContactForm />
    //     <h2 className={css.secondHeading}>Contacts</h2>
    //     <Filter />
    //     <ContactList error={error} />
    //   </div>
    // </div>
    isRefreshing ? (
      <p>Refreshing user...</p>
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    )
  );
};

// login:
// Rybki
// rybki@gmail.com
// r1Y3b2k5i4$
