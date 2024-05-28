import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { Contact } from './Contact';
import css from '../styles/ContactList.module.css';

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
