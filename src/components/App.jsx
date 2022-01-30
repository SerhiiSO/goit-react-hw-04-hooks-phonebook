import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './Form/Form';
import ContactSearcher from './ContactSearcher/ContactSearcher';
import ContactsList from './ContactList/ContactList';

import GlobalStyle from './GlobalStyles/GlobalStyles';
import { AppContainer, InputTitle } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  onFormSubmit = ({ name, number }) => {
    const nameToAdd = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prev => ({
      contacts: [{ id: nanoid(), name, number }, ...prev.contacts],
    }));
  };

  onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  registerLogic = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <AppContainer>
        <GlobalStyle />
        <InputTitle>Phonebook</InputTitle>

        <ContactsForm onSubmit={this.onFormSubmit} />

        <InputTitle>Contacts</InputTitle>
        <ContactSearcher filter={filter} onChange={this.onChangeFilter} />
        <ContactsList
          contacts={this.registerLogic()}
          deleteContacts={this.deleteContacts}
        />
      </AppContainer>
    );
  }
}
