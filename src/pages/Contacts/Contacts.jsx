import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
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
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
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

export default Contacts;
