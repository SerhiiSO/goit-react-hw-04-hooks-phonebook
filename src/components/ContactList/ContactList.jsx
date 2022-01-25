import React from 'react';
import PropTypes from 'prop-types';

export default function ContactsList(props) {

  

  const { contacts, deleteContacts } = props;
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <button onClick={() => deleteContacts(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContacts: PropTypes.func.isRequired,
  };