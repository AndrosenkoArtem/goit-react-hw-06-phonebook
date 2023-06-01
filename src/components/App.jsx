import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

// const initialState = {
//   contactList: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
export const App = () => {
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    const localContacts = localStorage.getItem('persist:contacts');
    // eslint-disable-next-line
    if (!eval(JSON.parse(localContacts)?.contactList)?.length) {
    }
  }, [contacts]);

  return (
    <>
      <GlobalStyle />
      <section>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </>
  );
};
