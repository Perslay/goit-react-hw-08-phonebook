import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { selectIsLoading, selectError } from '../../redux/selectors/index';
import { Loader } from '../../components/Loader/Loader';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <Helmet>
        <title>Contacts</title>
        <meta
          name="description"
          content="Welcome to the contacts page of the online phonebook. Save and manage names and phone numbers."
        />
        <meta
          name="keywords"
          content="contact, contacts, phonebook, phonenumber"
        />
      </Helmet>
      {isLoading && !error && <Loader />}
      <div className={css.appContainer}>
        <h1 className={css.firstHeading}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.secondHeading}>Contacts</h2>
        <Filter />
        <ContactList error={error} />
      </div>
    </main>
  );
};

export default Contacts;
