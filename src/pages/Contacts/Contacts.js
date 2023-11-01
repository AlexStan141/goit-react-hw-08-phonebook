import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Contacts.module.css';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/users/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.welcomeBanner}>
        <span className={css.welcomeBannerText}>Welcome {user.name}</span>
        <button
          className={css.button}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      </div>
      <ContactsForm></ContactsForm>
      <ContactsList></ContactsList>
    </>
  );
};
