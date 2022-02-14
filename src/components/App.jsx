import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './Form/Form';
import ContactSearcher from './ContactSearcher/ContactSearcher';
import ContactsList from './ContactList/ContactList';

import GlobalStyle from './GlobalStyles/GlobalStyles';
import { AppContainer, InputTitle } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const onFormSubmit = (name, number) => {
    const nameToAdd = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [{ id: nanoid(), name, number }, ...prevState]);
  };

  const onChangeFilter = event => setFilter(event.target.value);

  const registerLogic = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <InputTitle>Phonebook</InputTitle>

      <ContactsForm onSubmit={onFormSubmit} />

      <InputTitle>Contacts</InputTitle>
      <ContactSearcher filter={filter} onChange={onChangeFilter} />
      <ContactsList
        contacts={registerLogic()}
        deleteContacts={onDeleteContact}
      />
    </AppContainer>
  );
}
