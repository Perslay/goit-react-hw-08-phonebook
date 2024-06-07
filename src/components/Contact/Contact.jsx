import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations/contacts';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.itemContainer}>
      <div className={css.text}>
        <p className={css.paragraph}>{contact.name}</p>
        <p className={css.paragraph}>{contact.number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
};
