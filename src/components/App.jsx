import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './Form/Form';
import ContactSearcher from './ContactSearcher/ContactSearcher';
import ContactsList from './ContactList/ContactList';

import GlobalStyle from './GlobalStyles/GlobalStyles';
import {AppContainer, InputTitle} from './App.styled'
import { FormStyled } from './Form/Form.styled';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Serhii Semenov', number: '111-11-11' },
      { id: 'id-2', name: 'Bulachova Tatyana', number: '222-22-22' },
    ],
    filter: '',
  };

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
      <GlobalStyle/>
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
