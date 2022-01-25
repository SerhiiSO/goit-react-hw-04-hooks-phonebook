import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import {ContactsForm} from "./Form/Form";
import ContactSearcher from './ContactSearcher/ContactSearcher';
import ContactsList from "./ContactList/ContactList";



export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Serhii Semenov', phone: '111-11-11' },
      { id: 'id-2', name: 'Bulachova Tatyana', phone: '222-22-22' },
      
    ],
    filter: '',
  };

  onFormSubmit = ({ name, phone }) => {
    const nameToAdd = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState( contacts  => ({
      contacts: [{ id: nanoid(), name, phone }, ...contacts],
    }));
  };

  onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  registerLogic = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
    <>
        
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={this.onFormSubmit} />

        <h2>Contacts</h2>
        <ContactSearcher filter={filter} onChange={this.onChangeFilter} />
        <ContactsList contacts={this.registerLogic()} deleteContacts={this.deleteContacts} />
      </>
    );
  }
}
