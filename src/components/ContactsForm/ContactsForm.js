import React from 'react';
import css from './ContactsForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
  };

  return (
    <div className={css.formContainer}>
      <form className={css.contactsForm} onSubmit={handleSubmit}>
        <label for="name" className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          required
        ></input>
        <br></br>
        <br></br>
        <label for="number" className={css.label}>
          Number
        </label>
        <input
          type="text"
          name="number"
          id="number"
          className={css.input}
          required
        ></input>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
