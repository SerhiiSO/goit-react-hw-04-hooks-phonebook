import React from 'react';
import PropTypes from 'prop-types';
import { DivStyled,ListStyled,ItemStyled,DataStyled,DeleteStyled } from './ContactList.styled';
export default function ContactsList(props) {
  const { contacts, deleteContacts } = props;
  return (
    <DivStyled>
    <ListStyled>
      {contacts.map(contact => (
        <ItemStyled key={contact.id}>
          <DataStyled>{contact.name}</DataStyled>
          <DataStyled>{contact.number}</DataStyled>
          <DeleteStyled onClick={() => deleteContacts(contact.id)}>Delete</DeleteStyled>
        </ItemStyled>
      ))}
    </ListStyled></DivStyled>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
