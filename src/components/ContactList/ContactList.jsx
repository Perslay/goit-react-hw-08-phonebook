import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ error }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {error && (
        <p className={css.error}>Failed to fetch data from the server</p>
      )}
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  error: PropTypes.string,
};
