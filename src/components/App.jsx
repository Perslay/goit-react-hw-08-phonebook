import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import css from '../styles/App.module.css';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Loader } from './Loader';
import { Filter } from './Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <div className={css.appContainer}>
        <h1 className={css.firstHeading}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.secondHeading}>Contacts</h2>
        <Filter />
        <ContactList error={error} />
      </div>
    </div>
  );
};
