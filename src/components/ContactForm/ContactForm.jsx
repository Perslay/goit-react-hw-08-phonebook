import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors/contacts';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations/contacts';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form[0].value;
    const number = form[1].value;
    const nameExists = contacts.some(contact => contact.name === name);

    if (nameExists) {
      alert(name + ' is already in contacts.');
    } else {
      dispatch(addContact({ name, number }));
    }

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.row}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]+((['\s\-][a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ ])?[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.row}>
        <label className={css.label} htmlFor={numberInputId}>
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must start with +, be at least 3 digits and can contain spaces, dashes"
          required
        />
      </div>
      <button className={css.submit} type="submit">
        Add contact
      </button>
    </form>
  );
};
