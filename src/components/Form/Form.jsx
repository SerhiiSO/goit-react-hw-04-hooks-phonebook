import { Component } from 'react';
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, LabelStyled, FieldStyled, SubmitBtnStyled } from './Form.styled';
const state = {
  name: '',
  number: '',
};
const contactOpt = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});
const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};
export class ContactsForm extends Component {
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.props.onSubmit(values);
    resetForm();
  };
  render() {
    return (
      <FormStyled>
      <Formik
        initialValues={state}
        validationSchema={contactOpt}
        onSubmit={this.handleSubmit}
        
      >
        <Form autoComplete="off">
          <FieldStyled>
            <LabelStyled htmlFor="name">contact name</LabelStyled>
            <Field
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Fill contact name"
            />
            <FormError name="name" />
          </FieldStyled>
          <FieldStyled>
            <LabelStyled htmlFor="number">contact number</LabelStyled>
            <Field
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="Fill contact number"
            />
            <FormError name="number" />
          </FieldStyled>
          <SubmitBtnStyled type="submit">Add contact</SubmitBtnStyled>
        </Form>
      </Formik>
      </FormStyled>
      
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};