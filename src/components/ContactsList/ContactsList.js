import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';

export default function ContactsList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact, index) => {
        return <Contact contact={contact} key={index}></Contact>;
      })}
    </ul>
  );
}
